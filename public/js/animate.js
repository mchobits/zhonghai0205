 /**
 * Created by Administrator on 2016/12/15.
 */
setInterval(function(){
    TWEEN.update();
}, 1/50);
function animate( time ) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
animate();
//移动
function tweenStrat(id,x1,y1,x2,y2,time,time2,type){

    var mesh = document.getElementById(id);
    x1 = x1*sfw;
    y1 = y1*sfh;

    x2 = x2*sfw;
    y2 = y2*sfh;
    var position = { x :x1, y:y1};
    var target = { x : x2, y: y2};

    var tween = new TWEEN.Tween(position).to(target, time);

    tween.onUpdate(function(){
        mesh.style.left = position.x+"px";
        mesh.style.top = position.y+"px";
    });

    if(type==1){
        tween.easing(TWEEN.Easing.Bounce.Out);
        //结束的时候跳起来
    }else if(type==2){
        tween.easing(TWEEN.Easing.Back.InOut);
        //开始结束都跳起来
    }else if(type==3){
        tween.easing(TWEEN.Easing.Cubic.Out);
        //缓缓结束
    }else if(type==4){
        tween.easing(TWEEN.Easing.Linear.None);
        //匀速
    }

    tween.delay(time2);
    tween.start();
};


 function tweenStratRepeat(id,x1,y1,x2,y2,time,time2,type){

     var mesh = document.getElementById(id);
     x1 = x1*sfw;
     y1 = y1*sfh;

     x2 = x2*sfw;
     y2 = y2*sfh;
     var position = { x :x1, y:y1};
     var target = { x : x2, y: y2};

     var tween = new TWEEN.Tween(position).to(target, time).repeat(Infinity);

     tween.onUpdate(function(){
         mesh.style.left = position.x+"px";
         mesh.style.top = position.y+"px";
     });

     if(type==1){
         tween.easing(TWEEN.Easing.Bounce.Out);
         //结束的时候跳起来
     }else if(type==2){
         tween.easing(TWEEN.Easing.Back.InOut);
         //开始结束都跳起来
     }else if(type==3){
         tween.easing(TWEEN.Easing.Cubic.Out);
         //缓缓结束
     }else if(type==4){
         tween.easing(TWEEN.Easing.Linear.None);
         //匀速
     }

     tween.delay(time2);
     tween.start();
     return tween;
 };


 //闪烁
function shinePictrue(targetID,opacity1,opacity2,scale1,scale2,time){

    var position={opacity:opacity1,scale:scale1};
    var target = document.getElementById(targetID);
    var style  = document.getElementById(targetID).style;
    var tween1 = new TWEEN.Tween(position)
        .to({opacity:opacity2,scale:scale2}, 500)
        .easing(TWEEN.Easing.Quadratic.In)
        .delay(time)
        .onUpdate(update);
    var tween2 = new TWEEN.Tween(position)
        .to({opacity:opacity1,scale:scale1}, 500)
        .easing(TWEEN.Easing.Quadratic.In)
        .onUpdate(update);
    tween1.chain(tween2);
    tween2.chain(tween1);

    function update() {
        target.style.opacity = position.opacity;
        var transform ="scale("+position.scale+","+position.scale+")";
        style.MozTransform    = transform;
        style.WebkitTransform = transform;
        style.OTransform      = transform;
        style.Transform       = transform;
    }
    tween1.start();
    return tween1;
}


//透明度和规模变化
function shinePictrueOnce(targetID,opacity1,opacity2,scale1,scale2,time){

    var position={opacity:opacity1,scale:scale1};
    var style  = document.getElementById(targetID).style;
    var tween1 = new TWEEN.Tween(position)
        .to({opacity:opacity2,scale:scale2}, 500)
        .easing(TWEEN.Easing.Quadratic.In)
        .delay(time)
        .onUpdate(update);
    function update() {
        style.opacity = position.opacity;
        var transform ="scale("+position.scale+","+position.scale+")";
        style.MozTransform    = transform;
        style.WebkitTransform = transform;
        style.OTransform      = transform;
        style.Transform       = transform;
    }
    tween1.start();
    return tween1;
}
//图片旋转变大变小
function rorateAndChange(targetID,r1,r2,s1,s2,time){
    //console.log("我是动画");
    var rorateDeg={R:r1,S:s1};
    var style  = document.getElementById(targetID).style;
    var tween = new TWEEN.Tween(rorateDeg)
        .to({R:r2,S:s2},time)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(update);

    var tween1 = new TWEEN.Tween(rorateDeg)
        .to({R:r1,S:s1},time)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(update);


    function update() {
        var transform = "rotate("+ rorateDeg.R +"deg) scale("+ rorateDeg.S +")";
        style.MozTransform    = transform;
        style.WebkitTransform = transform;
        style.OTransform      = transform;
        style.Transform       = transform;
    }

    tween.chain(tween1);
    tween1.chain(tween);
    tween.start();

    return tween;
}




 //图片绕中心旋转
 function rorateByOrigin(targetID,r1,r2,x,y,time){
     //console.log("我是动画");
     var rorateDeg={R:r1};
     var style  = document.getElementById(targetID).style;
     var tween = new TWEEN.Tween(rorateDeg)
         .to({R:r2},time)
         .easing(TWEEN.Easing.Linear.None)
         .onUpdate(update);

     //var tween1 = new TWEEN.Tween(rorateDeg)
     //    .to({R:r1},time)
     //    .easing(TWEEN.Easing.Linear.None)
     //    .onUpdate(update);


     function update() {
         var transform = "rotate("+ rorateDeg.R +"deg)";
         var transformOrigin = x+"%"+" "+y+"%";
         style.MozTransform    = transform;
         style.WebkitTransform = transform;
         style.OTransform      = transform;
         style.Transform       = transform;
         style.TransformOrigin     = transformOrigin;
         style.MozTransformOrigin     = transformOrigin;
         style.WebkitTransformOrigin     = transformOrigin;
         style.OTransformOrigin     = transformOrigin;
         style.MsTransformOrigin     = transformOrigin;
     }

     //tween.chain(tween1);
     //tween1.chain(tween);
     tween.start();

     return tween;
 }
//图片3d旋转
function rorateThreeD(targetID,r1,r2,time,time1){
    var rorateDeg={R:r1};
    var style  = document.getElementById(targetID).style;
    var tween = new TWEEN.Tween(rorateDeg)
        .to({R:r2},time)
        .easing(TWEEN.Easing.Quadratic.In)
        .onUpdate(update)
        .delay(time1);
    tween.start();
    function update() {
        var transform = "rotateY("+ rorateDeg.R +"deg)";
        style.MozTransform    = transform;
        style.WebkitTransform = transform;
        style.OTransform      = transform;
        style.Transform       = transform;
    }
}

//图片一直旋转
function rorateInfinite(targetID,r1,r2,time,res){
    var rorateDeg={R:r1};
    var style  = document.getElementById(targetID).style;
    var tween = new TWEEN.Tween(rorateDeg)
        .to({R:r2},time)
        .repeat(res)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(update);
    function update() {
        var transform = "rotate("+ rorateDeg.R +"deg)";
        style.MozTransform    = transform;
        style.WebkitTransform = transform;
        style.OTransform      = transform;
        style.Transform       = transform;
    }
    
    tween.start();
    
    return tween;
}

//图片规模变大变小衔接
function justChange(targetID,s1,s2,time){
    var rorateDeg={S:s1};
    var style  = document.getElementById(targetID).style;
    var tween = new TWEEN.Tween(rorateDeg)
        .to({S:s2},time)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(update);

    var tween1 = new TWEEN.Tween(rorateDeg)
        .to({S:s1},time)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(update);
    function update() {
        var transform = "scale("+ rorateDeg.S +")";
        style.MozTransform    = transform;
        style.WebkitTransform = transform;
        style.OTransform      = transform;
        style.Transform       = transform;
    }
    tween.chain(tween1);
    tween1.chain(tween);
    tween.start();
    return tween;
}



//匀速变化
 function justChangeOnce(targetID,s1,s2,time,res){
     var rorateDeg={S:s1};
     var style  = document.getElementById(targetID).style;
     var tween = new TWEEN.Tween(rorateDeg)
         .to({S:s2},time)
         .easing(TWEEN.Easing.Linear.None)
         .repeat(res)
         .onUpdate(update);

     function update() {
         var transform = "scale("+ rorateDeg.S +")";
         style.MozTransform    = transform;
         style.WebkitTransform = transform;
         style.OTransform      = transform;
         style.Transform       = transform;
     }
     tween.start();
     return tween;
 }

//图片dun
function dunPicture(targetID,x1,y1,x2,y2,ctime,dtime){
    var position={x:x1,y:y1};
    console.log('targetID',targetID);
    var style  = document.getElementById(targetID).style;
    var tween = new TWEEN.Tween(position)
        .to({x:x2,y:y2}, ctime)
        .easing(TWEEN.Easing.Back.InOut)
        .delay(dtime)
        .repeat(Infinity)
        .onUpdate(update);
    function update() {
        var transform ="scale("+position.x+","+position.y+")";
        style.MozTransform    = transform;
        style.WebkitTransform = transform;
        style.OTransform      = transform;
        style.Transform       = transform;
    }
    tween.start();
    return tween;
}

//用不停歇上下移动
 function upAndDown(targetID,h1,h2,time){
     h1 = h1*sfh;
     h2 = h2*sfh;
     var position={heigt:h1};
     var target = document.getElementById(targetID);
     var style  = document.getElementById(targetID).style;
     var tween1 = new TWEEN.Tween(position)
         .to({heigt:h2}, time)
         .easing(TWEEN.Easing.Quadratic.In)
         .onUpdate(update);
     var tween2 = new TWEEN.Tween(position)
         .to({heigt:h1}, time)
         .easing(TWEEN.Easing.Quadratic.In)
         .onUpdate(update);
     tween1.chain(tween2);
     tween2.chain(tween1);
     tween1.start();
     function update() {
         target.style.top = position.heigt+"px";
     }
     return tween1;
 }

 //用不停歇左右移动
 function leftAndleft(targetID,x1,x2,time){
     h1 = x1*sfw;
     h2 = x2*sfw;
     var position={heigt:h1};
     var target = document.getElementById(targetID);
     var tween1 = new TWEEN.Tween(position)
         .to({heigt:h2}, time)
         .easing(TWEEN.Easing.Linear.None)
         .onUpdate(update);
     var tween2 = new TWEEN.Tween(position)
         .to({heigt:h1}, time)
         .easing(TWEEN.Easing.Linear.None)
         .onUpdate(update);
     tween1.chain(tween2);
     tween2.chain(tween1);
     tween1.start();
     function update() {
         target.style.left = position.heigt+"px";
     }
     return tween1;
 }

 //透明和位移

 function tweenStratOpacity(id,x1,y1,x2,y2,op1,op2,d1,d2,ctime,dtime2,type){

     var mesh = document.getElementById(id);
     x1 = x1*sfw;
     y1 = y1*sfh;

     x2 = x2*sfw;
     y2 = y2*sfh;

     var position = { x :x1, y:y1,opacity:op1,d:d1};
     var target = { x : x2, y: y2,opacity:op2,d:d2};

     var tween = new TWEEN.Tween(position).to(target, ctime);

     tween.onUpdate(function(){
         mesh.style.left = position.x+"px";
         mesh.style.top = position.y+"px";
         mesh.style.opacity = position.opacity;
         var transform = "rotate("+ position.d +"deg)";
         mesh.style.MozTransform    = transform;
         mesh.style.WebkitTransform = transform;
         mesh.style.OTransform      = transform;
         mesh.style.Transform       = transform;
     });

     if(type==1){
         tween.easing(TWEEN.Easing.Bounce.Out);
         //结束的时候跳起来
     }else if(type==2){
         tween.easing(TWEEN.Easing.Quadratic.InOut);
         //开始结束都跳起来
     }else if(type==3){
         tween.easing(TWEEN.Easing.Cubic.Out);
         //缓缓结束
     }else if(type==4){
         tween.easing(TWEEN.Easing.Linear.None);
         //匀速
     }else if(type==5){
         tween.easing(TWEEN.Easing.Quintic.In);
         //结束加速
     }

     tween.delay(dtime2);
     tween.start();
     return tween;
 };

//改变透明度
 function justOpacity(id,op1,op2,ctime,dtime2,type){

     var mesh = document.getElementById(id);

     var position = { opacity:op1};
     var target = { opacity:op2};

     var tween = new TWEEN.Tween(position).to(target, ctime);

     tween.onUpdate(function(){
         mesh.style.opacity = position.opacity;
     });

     if(type==1){
         tween.easing(TWEEN.Easing.Bounce.Out);
         //结束的时候跳起来
     }else if(type==2){
         tween.easing(TWEEN.Easing.Bounce.InOut);
         //开始结束都跳起来
     }else if(type==3){
         tween.easing(TWEEN.Easing.Cubic.Out);
         //缓缓结束
     }else if(type==4){
         tween.easing(TWEEN.Easing.Linear.None);
         //匀速
     }
     tween.delay(dtime2);
     tween.start();
     return tween;
 };
//左右摇晃
 function leftAndRight(targetID,d1,d2,time){
     var position={deg:d1};
     var style  = document.getElementById(targetID).style;
     var tween1 = new TWEEN.Tween(position)
         .to({deg:d1}, time)
         .easing(TWEEN.Easing.Quadratic.In)
         .onUpdate(update);
     var tween2 = new TWEEN.Tween(position)
         .to({deg:d2}, time)
         .easing(TWEEN.Easing.Quadratic.In)
         .onUpdate(update);
     tween1.chain(tween2);
     tween2.chain(tween1);
     tween1.start();
     function update() {
         var transform = "rotate("+ position.deg +"deg)";
         style.MozTransform    = transform;
         style.WebkitTransform = transform;
         style.OTransform      = transform;
         style.Transform       = transform;
     }
     return tween1;
 }

//位移旋转
 function moveAndRo(id,x1,y1,x2,y2,r1,r2,op1,op2,ctime,dtime2,type){

     var mesh = document.getElementById(id);
     var style  = document.getElementById(id).style;
     x1 = x1*sfw;
     y1 = y1*sfh;

     x2 = x2*sfw;
     y2 = y2*sfh;

     var position = { x :x1, y:y1,rotation:r1,op:op1};
     var target = { x : x2, y: y2,rotation:r2,op:op2};

     var tween = new TWEEN.Tween(position).to(target, ctime);

     tween.onUpdate(function(){
         mesh.style.left = position.x+"px";
         mesh.style.top = position.y+"px";
         mesh.style.opacity = position.op;
         //console.log("position.op",position.op);
         var transform = "rotate("+ position.rotation +"deg)";
         style.MozTransform    = transform;
         style.WebkitTransform = transform;
         style.OTransform      = transform;
         style.Transform       = transform;
     });

     if(type==1){
         tween.easing(TWEEN.Easing.Bounce.Out);
         //结束的时候跳起来
     }else if(type==2){
         tween.easing(TWEEN.Easing.Bounce.InOut);
         //开始结束都跳起来
     }else if(type==3){
         tween.easing(TWEEN.Easing.Cubic.Out);
         //缓缓结束
     }else if(type==4){
         tween.easing(TWEEN.Easing.Linear.None);
         //匀速
     }
     tween.delay(dtime2);
     tween.start();
     return tween;
 }

 //改变高度
 function changeHeight(id,x1,y1,x2,y2,h1,h2,ctime,dtime2,type){

     var mesh = document.getElementById(id);
     h1 = h1*sfh;
     h2 = h2*sfh;
     x1 = x1*sfw;
     y1 = y1*sfh;

     x2 = x2*sfw;
     y2 = y2*sfh;
     var position = { x :x1, y:y1,height:h1};
     var target = { x : x2, y: y2,height:h2};

     var tween = new TWEEN.Tween(position).to(target, ctime);

     tween.onUpdate(function(){
         mesh.style.height = position.height+"px";
         mesh.style.left = position.x+"px";
         mesh.style.top = position.y+"px";
     });

     if(type==1){
         tween.easing(TWEEN.Easing.Bounce.Out);
         //结束的时候跳起来
     }else if(type==2){
         tween.easing(TWEEN.Easing.Bounce.InOut);
         //开始结束都跳起来
     }else if(type==3){
         tween.easing(TWEEN.Easing.Cubic.Out);
         //缓缓结束
     }else if(type==4){
         tween.easing(TWEEN.Easing.Linear.None);
         //匀速
     }
     tween.delay(dtime2);
     tween.start();
     return tween;
 }


 //改变宽度
 function changeWidth(id,x1,y1,x2,y2,w1,w2,ctime,dtime2,type){

     var mesh = document.getElementById(id);
     w1 = w1*sfw;
     w2 = w2*sfw;
     x1 = x1*sfw;
     y1 = y1*sfh;

     x2 = x2*sfw;
     y2 = y2*sfh;
     var position = { x :x1, y:y1,width:w1};
     var target = { x : x2, y: y2,width:w2};

     var tween = new TWEEN.Tween(position).to(target, ctime);

     tween.onUpdate(function(){
         mesh.style.width = position.width+"px";
         mesh.style.left = position.x+"px";
         mesh.style.top = position.y+"px";
     });

     if(type==1){
         tween.easing(TWEEN.Easing.Bounce.Out);
         //结束的时候跳起来
     }else if(type==2){
         tween.easing(TWEEN.Easing.Bounce.InOut);
         //开始结束都跳起来
     }else if(type==3){
         tween.easing(TWEEN.Easing.Cubic.Out);
         //缓缓结束
     }else if(type==4){
         tween.easing(TWEEN.Easing.Linear.None);
         //匀速
     }
     tween.delay(dtime2);
     tween.start();
     return tween;
 }

 //旋转并改变大小
 function rotateScale(targetID,x1,y1,x2,y2,s1,s2,r1,r2,op1,op2,time,dtime2,res,type){
     x1 = x1*sfw;
     y1 = y1*sfh;

     x2 = x2*sfw;
     y2 = y2*sfh;
     var rorateDeg={X:x1,Y:y1,S:s1,R:r1,O:op1};
     var style  = document.getElementById(targetID).style;
     var tween = new TWEEN.Tween(rorateDeg)
         .to({X:x2,Y:y2,S:s2,R:r2,O:op2},time)
         .repeat(res)
         .onUpdate(update);

     if(type==1){
         tween.easing(TWEEN.Easing.Bounce.Out);
         //结束的时候跳起来
     }else if(type==2){
         tween.easing(TWEEN.Easing.Bounce.InOut);
         //开始结束都跳起来
     }else if(type==3){
         tween.easing(TWEEN.Easing.Cubic.Out);
         //缓缓结束
     }else if(type==4){
         tween.easing(TWEEN.Easing.Linear.None);
         //匀速
     }
     function update() {
         style.left = rorateDeg.X+"px";
         style.top = rorateDeg.Y+"px";
         style.opacity = rorateDeg.O;
         var transform = "scale("+ rorateDeg.S +") rotate("+ rorateDeg.R +"deg)";
         style.MozTransform    = transform;
         style.WebkitTransform = transform;
         style.OTransform      = transform;
         style.Transform       = transform;
     }
     tween.delay(dtime2);
     tween.start();
     return tween;
 }

