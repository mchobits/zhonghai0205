<?php

class GeXingPic
{
    private $bg = APP_PATH."/library/bg.png";
    private $bg2 = APP_PATH."/library/bg2.png";
    private $avatar_path = BASE_PATH.'/public/upload/avatar/';
    private $gexing_path = BASE_PATH.'/public/upload/gexing/';
    //private $avatar_path = '/home/vagrant/code/public/upload/avatar/';
    //private $gexing_path = '/home/vagrant/code/public/upload/gexing/';


    public function build_xgt($avatar, $score = 100, $nickname = "花花小喵喵") {

        $gdImageResource = $this->get_avatar_by_id($avatar);
        $bg = $this->buildBackground();
        $whiteImgObj = $this->get_white_bg();
        $avatarImgObj = $this->buildAvatar($gdImageResource);

        $typeImgObj = $this->get_type_bg($score);
        $textImgObj = $this->getTextResource($nickname);

        $nick_name_length = mb_strlen($nickname,'UTF-8');

        $left = 320 - (($nick_name_length * 45) / 2);

        imagecopy($whiteImgObj, $avatarImgObj, 206, 378, 0, 0, 230, 230);

        imagecopy($whiteImgObj, $bg, 0, 0, 0, 0, 640, 1060);
        imagecopy($whiteImgObj, $typeImgObj, 0, 0, 0, 0, 640, 935);
        imagecopy($whiteImgObj, $textImgObj, 0, 625, 0, 0, 640, 55);
        //$buildBackground = $this->buildBackground();

        // // $blurBgImgObj = $this->blur($this->image_create_from_ext($avatar), $blurFactor);


        // $whiteImgObj = $this->get_bg();
        // imagecopy($whiteImgObj, $blurBgImgObj, 0, 0, 0, 0, 700, 700);


        imagejpeg($whiteImgObj, $this->gexing_path . $avatar . ".jpg");
        //imagejpeg($whiteImgObj, "/home/vagrant/code/public/upload/gexing/6365082304074743808.jpg");
        imagedestroy($whiteImgObj);

        if (file_exists($this->gexing_path . $avatar . ".jpg")) {
            return true;
        } else {
            return false;
        }

//        $temp = pathinfo($avatar);
//        $name = $temp['basename'];
//        $path = $temp['dirname'];
//        $exte = $temp['extension'];
//        $savename = $save_name ? $save_name : $name;
//        $savepath = $save_name ? $save_name : $path;
//        $savefile = './' . $save_name;
//        $srcinfo = @getimagesize($avatar);
//        switch ($srcinfo[2]) {
//            case 1:
//                imagegif($whiteImgObj, $savefile);
//                break;
//            case 2:
//                imagejpeg($whiteImgObj, $savefile);
//                break;
//            case 3:
//                imagepng($whiteImgObj, $savefile);
//                break;
//            default:
//                return '保存失败'; //保存失败
//        }
//        return $savefile;
        //imagepng($whiteImgObj, "./bbbbb.png");
    }

    public function getTextResource($nickname) {
        //$str = "梁珩儿mm";
        //echo mb_strlen($str,'UTF-8');
        //$im =imagecreatetruecolor(280, 55);
        $im =imagecreatetruecolor(640, 55);
        imagesavealpha($im, true);
        $bg = imagecolorallocatealpha($im, 255, 0, 0, 127);
        imagefill($im, 0, 0, $bg);
        $col = imagecolorallocate($im, 255, 255, 255);
        $font= APP_PATH."/library/wenyue.otf"; //字体所放目录

        $fontBox = imagettfbbox(40, 0, $font, $nickname);
        //$come=iconv("gb2312","utf-8","水火不容");
        imagettftext($im,40,0,0,45,$col,$font,$nickname); //写 TTF 文字到图中
        imagettftext($im,40,0,ceil((640 - $fontBox[2]) / 2),45,$col,$font,$nickname);
        return $im;
        //imagepng($im, "./ddd.png");
    }

    private function buildBackground() {
        return imagecreatefrompng($this->bg2);


    }

    private function get_white_bg() {
        return imagecreatefrompng($this->bg);
    }

    private function get_avatar_by_id($id) {

        //var_dump($this->avatar_path . $id . "_avatar.jpg");

        return imagecreatefromjpeg($this->avatar_path . $id . "_avatar.jpg");
        //return imagecreatefromjpeg("/home/vagrant/code/public/upload/avatar/6365082304074743808_avatar.jpg");
    }

    private function get_type_bg($score) {
        if ($score < 48) {
            return imagecreatefrompng(APP_PATH."/library/type_1.png");

        } else if ($score >= 48 && $score < 66) {

            return imagecreatefrompng(APP_PATH."/library/type_2.png");

        } else if ($score >= 66 && $score < 84) {

            return imagecreatefrompng(APP_PATH."/library/type_3.png");

        } else if ($score >= 84 && $score <= 100) {

            return imagecreatefrompng(APP_PATH."/library/type_4.png");
        }
    }



    private function buildAvatar($gdImageResource)
    {
        $target_width = 230;
        $target_height = 230;

        $source_width = imagesx($gdImageResource);
        $source_height = imagesy($gdImageResource);

        $source_ratio = $source_height / $source_width;
        $target_ratio = 1;

        // 源图过高
        if ($source_ratio > $target_ratio) {
            $cropped_width = $source_width;
            $cropped_height = $source_width * $target_ratio;
            $source_x = 0;
            $source_y = ($source_height - $cropped_height) / 2;
        } // 源图过宽
        elseif ($source_ratio < $target_ratio) {
            $cropped_width = $source_height / $target_ratio;
            $cropped_height = $source_height;
            $source_x = ($source_width - $cropped_width) / 2;
            $source_y = 0;
        } // 源图适中
        else {
            $cropped_width = $source_width;
            $cropped_height = $source_height;
            $source_x = 0;
            $source_y = 0;
        }
        $target_image = imagecreatetruecolor($target_width, $target_height);
        $cropped_image = imagecreatetruecolor($cropped_width, $cropped_height);
        // 裁剪
        imagecopy($cropped_image, $gdImageResource, 0, 0, $source_x, $source_y, $cropped_width, $cropped_height);
        // 缩放
        imagecopyresampled($target_image, $cropped_image, 0, 0, 0, 0, $target_width, $target_height, $cropped_width, $cropped_height);


        // $white_circle_res = $this->get_white_circle();
        // imagesavealpha($white_circle_res, true);
        // imagecopy($white_circle_res, $newpic, 5, 5, 0, 0, $w, $h);
        //imagepng($white_circle_res, "./aaaa.png");
        //imagedestroy($newpic);

        // $background = imagecreatetruecolor(220,220); // 背景图片
        // $color   = imagecolorallocate($background, 202, 201, 201); // 为真彩色画布创建白色背景，再设置为透明
        // imagefill($background, 0, 0, $color);
        // imageColorTransparent($background, $color);

        // $radius  = 15;
        // // lt(左上角)
        // $lt_corner  = $this->get_lt_rounder_corner($radius);
        // imagecopymerge($target_image, $lt_corner, 0, 0, 0, 0, $radius, $radius, 100);
        // // lb(左下角)
        // $lb_corner  = imagerotate($lt_corner, 90, 0);
        // imagecopymerge($target_image, $lb_corner, 0, $target_height - $radius, 0, 0, $radius, $radius, 100);
        // // rb(右上角)
        // $rb_corner  = imagerotate($lt_corner, 180, 0);
        // imagecopymerge($target_image, $rb_corner, $target_width - $radius, $target_height - $radius, 0, 0, $radius, $radius, 100);
        // // rt(右下角)
        // $rt_corner  = imagerotate($lt_corner, 270, 0);
        // imagecopymerge($target_image, $rt_corner, $target_width - $radius, 0, 0, 0, $radius, $radius, 100);

        // imagecopyresized($background,$target_image,0,0,0,0,220,220,220,220);



        return $target_image;
    }

    private function get_lt_rounder_corner($radius) {
        $img     = imagecreatetruecolor($radius, $radius);  // 创建一个正方形的图像
        $bgcolor    = imagecolorallocate($img, 223, 0, 0);   // 图像的背景
        $fgcolor    = imagecolorallocate($img, 0, 0, 0);
        imagefill($img, 0, 0, $bgcolor);
        // $radius,$radius：以图像的右下角开始画弧
        // $radius*2, $radius*2：已宽度、高度画弧
        // 180, 270：指定了角度的起始和结束点
        // fgcolor：指定颜色
        imagefilledarc($img, $radius, $radius, $radius*2, $radius*2, 180, 270, $fgcolor, IMG_ARC_PIE);
        // 将弧角图片的颜色设置为透明
        imagecolortransparent($img, $fgcolor);
        // 变换角度
        // $img = imagerotate($img, 90, 0);
        // $img = imagerotate($img, 180, 0);
        // $img = imagerotate($img, 270, 0);
        // header('Content-Type: image/png');
        // imagepng($img);
        return $img;
    }

    private function image_create_from_ext($imgfile)
    {
        $info = getimagesize($imgfile);
        $im = null;
        switch ($info[2]) {
            case 1:
                $im = imagecreatefromgif($imgfile);
                break;
            case 2:
                $im = imagecreatefromjpeg($imgfile);
                break;
            case 3:
                $im = imagecreatefrompng($imgfile);
                break;
        }
        return $im;
    }



}
//
//$p = new GeXingPic();
////$p->getTextResource();
//$p->build_xgt("./0.jpg");