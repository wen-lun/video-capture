export default class VideoCapture {
    private video;
    private canvas;
    private ctx;
    private videoDuration;
    private objectURL?;
    /**
     * 构造方法
     * @param uri 可以是一个视频链接，也可以是一个视频文件对象
     */
    constructor(uri: string | File);
    /**获取视频时长 */
    private getVideoDuration;
    /**
     * 捕获视频的一个画面
     * @param time 指定时间，可以是秒数，如10，也可以是以%结尾的百分数，如'50%'
     * @param img 可以是img的id，或img对象，如果有指定，那么会将捕获的画面dataURL赋值给img.src
     * @return 一个Promise对象 可通过await取得内容 { dataURL: 捕获的画面的base64, width: 画面的宽度, height: 画面的高度 }>
     */
    capture(time?: number | string, img?: HTMLImageElement | string): Promise<{
        dataURL: string;
        width: number;
        height: number;
    }>;
    /**释放资源 */
    revoke(): void;
}
