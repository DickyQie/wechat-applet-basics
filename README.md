# 微信小程序------轮播图 
<h4>swiper</h4> 
<p>微信小程序实现轮播图，和网站，APP的效果差不多，代码少，效率高。</p> 
<p>先来看看效果图：</p> 
<p>　　<img alt="" src="http://images2017.cnblogs.com/blog/1041439/201709/1041439-20170901225913171-1969847061.gif"></p> 
<p>　　</p> 
<p>主要用<strong>swiper + swiper-item</strong>来实现</p> 
<pre><code class="language-html">&lt;view class='swiper'&gt;滑块视图容器&lt;/view&gt;

&lt;!--
   indicator-dots='true' 是否显示指示点  默认 false
   indicator-color:指示点颜色
   indicator-active-color:选中的指示点颜色
   autoplay：是否自动切换  默认：false
   interval:自动切换时间间隔
   duration：滑动动画时长
   vertical  是否改成纵向， 默认  false
 --&gt;

&lt;swiper indicator-dots='true' indicator-color='gray'indicator-active-color='green' 
autoplay='true' interval='5000' duration='500'&gt;
    &lt;block wx:for="{{imgUrl}}"&gt;
      &lt;swiper-item class="item_image"&gt;
          &lt;image src='{{item}}' class='swiper_image' mode="aspectFill"&gt;&lt;/image&gt;
      &lt;/swiper-item&gt;
    &lt;/block&gt;

&lt;/swiper&gt;</code></pre> 
<p>&nbsp;一个简单的小案例，轮播图，代码简洁，功能强大。</p> 
