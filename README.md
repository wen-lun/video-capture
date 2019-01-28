# 效果图
<img src="https://raw.githubusercontent.com/destiny-wenlun/video-capture/master/img/demo.png"  />

# 1.安装
* &lt;script&gt;标签引入"dist/video-capture.js"或"dist/video-capture.min.js"
+ 使用npm，运行命令：npm install --save video-capture
# 2.例子

* npm使用
``` javascript
import VideoCapture form 'video-capture'

async test(){
    //dataURL 捕获画面的base64
    //width画面宽
    //height画面高
    let { dataURL, width, height } = new VideoCapture("https://vjs.zencdn.net/v/oceans.mp4").capture("10%");

    document.getElementById("imgId").src = dataURL;
}

test();
```

* 使用远程视频地址
```html
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        <img id="preview1" />
        <img id="preview2" />
        <img id="preview3" />
        <script src="../dist/video-capture.min.js"></script>
        <script>
            //方法1、捕获20s处的画面，并使用preview1显示出来
            new VideoCapture("https://vjs.zencdn.net/v/oceans.mp4").capture(20, "preview1");
            //方法2、捕获20s处的画面，传入img dom
            new VideoCapture("https://vjs.zencdn.net/v/oceans.mp4").capture(20, document.getElementById("preview2"));
            //方法3、捕获50%处画面
            new VideoCapture("https://vjs.zencdn.net/v/oceans.mp4").capture("50%", "preview3"));

        </script>
    </body>
</html>
```

* 使用本地视频资源
```html
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        <input id="inputFile" type="file"/>
        <img id="preview"/>
        <script src="../dist/video-capture.min.js"></script>
        <script>
            document.getElementById("inputFile").onchange = function ({ target }) {
                let [file] = target.files;
                if (!/.*\.mp4$/.test(file.name)) alert("请选择mp4视频文件");
                new VideoCapture(file).capture("50%", "preview");
            }
        </script>
    </body>
</html>
```


# 3.方法&参数
## 3.1 构造方法 VideoCapture(uri)
* uri：可以是一个远程视频链接，也可以是一个本地视频文件对象

## 3.2 capture(time,img)方法
* time：指定时间，可以是秒数，如10，也可以是以%结尾的百分数，如'50%' 
* img：可以是img标签的id，或img对象，如果有指定，那么会将捕获的画面dataURL赋值给img.src

## 3.3 revoke() 方法
> 当构造方法传入的是一个本地视频资源时，在有必要的时候，可以调用revoke方法来释放资源。

