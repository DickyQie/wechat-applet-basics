## 微信小程序------媒体组件（视频，音乐，图片） 
 <p>今天主要是简单的讲一下小程序当中的媒体组件，媒体组件包括：视频，音乐，图片等。</p> 
<p>先来看看效果图：</p> 
<p>　　　<img alt="" src="https://static.oschina.net/uploads/img/201709/17201542_Z4kq.gif"></p> 
<p><strong>1：图片Image</strong></p> 
<pre><code class="language-html">&lt;!--
  scaleToFill:不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
  widthFix:宽度不变，高度自动变化，保持原图宽高比不变
  aspectFill:保持纵横比缩放图片，只保证图片的短边能完全显示出来。
              也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
  aspectFit: 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 

 --&gt;

&lt;image style='width: 100%; height:150px' src='../img/models.jpg' mode='scaleToFill'&gt;&lt;/image&gt;
&lt;image style='width: 200px; height:200px' src='../img/models.jpg' mode='widthFix'&gt;&lt;/image&gt;
&lt;image style='width: 200px; height:100px' src='../img/models.jpg' mode='aspectFill'&gt;&lt;/image&gt;
&lt;image style='width: 200px; height:100px' src='../img/models.jpg' mode='aspectFit'&gt;&lt;/image&gt;</code></pre> 
<p>图片显示，可根据&nbsp; mode属性设置不同的显示模式。</p> 
<p><strong>2：音乐播放&nbsp; audio</strong></p> 
<pre><code class="language-html">&lt;!--
    简单的实现音乐播放
    src：播放音频的资源地址
    poster：封面图片地址
    controls：是否显示默认控件
    name：歌曲名称
    author:歌曲作者
 --&gt;
&lt;audio src="{{url}}" poster="{{poster}}" controls="true" author="{{author}}" name="{{name}}"&gt;&lt;/audio&gt;</code></pre> 
<p><strong>3：视频播放 video</strong></p> 
<pre><code class="language-html">&lt;!--
  播放视频
   src：视频资源链接
   danmu-list:弹幕列表
   danmu-btn:是否显示弹幕按钮
   enable-danmu:是否展示弹幕，只在初始化有效
   loop：是否循环播放
   muted  是否静音播放
 --&gt;
 
&lt;video id='videocontext' src="{{src}}" danmu-btn='true' 
danmu-list='{{danmuList}}' enable-danmu='true' loop='false' muted='false'&gt;&lt;/video&gt;
&lt;input class='text_danmu' bindblur='bindInputBlur' type='text'&gt;&lt;/input&gt;
&lt;button bindtap='bindSendDanmu' type='primary'&gt;提交弹幕&lt;/button&gt;</code></pre> 
<p>控件使用都和H5的差不多，代码少，功能强大；</p> 
