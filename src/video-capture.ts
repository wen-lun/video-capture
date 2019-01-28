export default class VideoCapture {

    private video = document.createElement("video")
    private canvas = document.createElement("canvas")
    private ctx = this.canvas.getContext("2d")!
    private videoDuration = 0
    private objectURL?: string

    /**
     * 构造方法
     * @param uri 可以是一个视频链接，也可以是一个视频文件对象
     */
    constructor(uri: string | File) {
        if ("string" == typeof uri) {
            this.video.src = uri;
            //允许跨域
            this.video.setAttribute('crossOrigin', 'anonymous');
        } else if (uri instanceof File) {
            if (!/.*\.mp4$/.test(uri.name)) throw new Error("视频格式只能为.mp4");
            this.video.src = this.objectURL = URL.createObjectURL(uri);
        } else throw new Error("uri可以是一个远程连接，或是一个视频文件对象")
        this.video.muted = true;
    }

    /**获取视频时长 */
    private async getVideoDuration(): Promise<number> {
        if (this.videoDuration > 0) return Promise.resolve(this.videoDuration);
        return new Promise<number>(resolve => {
            const video = this.video;
            //当媒介能够开始播放
            video.addEventListener("canplay", function timeupdate() {
                video.removeEventListener("canplay", timeupdate);
                resolve(video.duration);
            })
        })
    }

    /**
     * 捕获视频的一个画面
     * @param time 指定时间，可以是秒数，如10，也可以是以%结尾的百分数，如'50%'
     * @param img 可以是img的id，或img对象，如果有指定，那么会将捕获的画面dataURL赋值给img.src
     * @return 一个Promise对象 可通过await取得内容 { dataURL: 捕获的画面的base64, width: 画面的宽度, height: 画面的高度 }>
     */
    public async capture(time: number | string = 0, img?: HTMLImageElement | string): Promise<{ dataURL: string, width: number, height: number }> {
        if ("string" == typeof time && /^\d+%$/.test(time)) {
            this.video.preload = 'metadata';
            let number = parseInt(time.substring(0, time.length - 1));
            this.videoDuration = await this.getVideoDuration();
            this.video.currentTime = (number / 100) * this.videoDuration;
        } else if (("string" == typeof time && /^\d+$/.test(time)) || ("number" == typeof time && time > 0)) {
            this.video.currentTime = time as number;
        } else {
            throw new Error("time是大于0的数字，或是一个以%结尾的百分数");
        }
        return new Promise<{ dataURL: string, width: number, height: number }>(resolve => {
            const { video, canvas, ctx } = this;
            video.addEventListener("timeupdate", function timeupdate() {
                video.removeEventListener("timeupdate", timeupdate);
                let width = canvas.width = video.videoWidth;
                let height = canvas.height = video.videoHeight;
                ctx.drawImage(video, 0, 0);
                let dataURL = canvas.toDataURL();
                if ("string" == typeof img) {
                    let imgDom = document.getElementById(img);
                    if (imgDom instanceof HTMLImageElement) imgDom.src = dataURL;
                } else if (img instanceof HTMLImageElement) {
                    if (img) img.src = dataURL;
                }
                resolve({ dataURL, width, height });
            })
        })
    }

    /**释放资源 */
    public revoke() {
        if (this.objectURL) {
            URL.revokeObjectURL(this.objectURL!);
            this.objectURL = undefined;
        }
    }
}

(window as any).VideoCapture = VideoCapture;