<?php

class GeXingPic
{
    public $width = 700;
    public $height = 700;
    private $white_circle = "./white_circle.png";
    private $bg = "./bg.png";

    public function build_xgt($avatar, $blurFactor = 3, $save_name) {
        //$gdImageResource = $this->image_create_from_ext($avatar);

        $blurBgImgObj = $this->blur($this->image_create_from_ext($avatar), $blurFactor);
        $avatarImgObj = $this->buildAvatar($this->image_create_from_ext($avatar));
        $whiteImgObj = $this->get_bg();
        imagecopy($whiteImgObj, $blurBgImgObj, 0, 0, 0, 0, 700, 700);
        imagecopy($whiteImgObj, $avatarImgObj, 250, 80, 0, 0, 210, 210);

        $temp = pathinfo($avatar);
        $name = $temp['basename'];
        $path = $temp['dirname'];
        $exte = $temp['extension'];
        $save_name = $save_name ? $save_name : $name;
        $save_path = $save_name ? $save_name : $path;
        $savefile = './' . $save_name;
        $srcinfo = @getimagesize($avatar);
        switch ($srcinfo[2]) {
            case 1:
                imagegif($whiteImgObj, $savefile);
                break;
            case 2:
                imagejpeg($whiteImgObj, $savefile);
                break;
            case 3:
                imagepng($whiteImgObj, $savefile);
                break;
            default:
                return '保存失败'; //保存失败
        }
        return $savefile;
        //imagepng($whiteImgObj, "./bbbbb.png");
    }

    public function getTextResource() {
        $str = "梁珩儿mm";
        echo mb_strlen($str,'UTF-8');
        $im =imagecreatetruecolor(280, 55);
        imagesavealpha($im, true);
        $bg = imagecolorallocatealpha($im, 255, 0, 0, 127);
        imagefill($im, 0, 0, $bg);
        $col = imagecolorallocate($im, 0, 51, 102);
        $font="yaoti.ttf"; //字体所放目录
        //$come=iconv("gb2312","utf-8","水火不容");
        imagettftext($im,40,0,0,45,$col,$font,"水火不容"); //写 TTF 文字到图中
        imagepng($im, "./ddd.png");
    }

    public function gaussian_blur($srcImg, $savepath = null, $savename = null, $blurFactor = 3)
    {
        $gdImageResource = $this->image_create_from_ext($srcImg);
        $srcImgObj = $this->blur($gdImageResource, $blurFactor);
        $temp = pathinfo($srcImg);
        $name = $temp['basename'];
        $path = $temp['dirname'];
        $exte = $temp['extension'];
        $savename = $savename ? $savename : $name;
        $savepath = $savepath ? $savepath : $path;
        $savefile = $savepath . '/' . $savename;
        $srcinfo = @getimagesize($srcImg);
        switch ($srcinfo[2]) {
            case 1:
                imagegif($srcImgObj, $savefile);
                break;
            case 2:
                imagejpeg($srcImgObj, $savefile);
                break;
            case 3:
                imagepng($srcImgObj, $savefile);
                break;
            default:
                return '保存失败'; //保存失败
        }
        return $savefile;
        imagedestroy($srcImgObj);
    }

    private function blur($gdImageResource, $blurFactor = 3)
    {
        $width = 700;
        $height = 700;
        $originalWidth = imagesx($gdImageResource);
        $originalHeight = imagesy($gdImageResource);

        //$gdImageResource = $gdImageResource2;

        $ratio_orig = $originalWidth/$originalHeight;
        if ($width/$height > $ratio_orig) {
            $width = $height*$ratio_orig;
        } else {
            $height = $width/$ratio_orig;
        }

        // blurFactor has to be an integer
        // blurFactor has to be an integer
        $blurFactor = round($blurFactor);
        $originalWidth = imagesx($gdImageResource);
        $originalHeight = imagesy($gdImageResource);
        $smallestWidth = ceil($originalWidth * pow(0.5, $blurFactor));
        $smallestHeight = ceil($originalHeight * pow(0.5, $blurFactor));
        // for the first run, the previous image is the original input
        $prevImage = $gdImageResource;
        $prevWidth = $originalWidth;
        $prevHeight = $originalHeight;
        // scale way down and gradually scale back up, blurring all the way
        for ($i = 0; $i < $blurFactor; $i += 1) {
            // determine dimensions of next image
            $nextWidth = $smallestWidth * pow(2, $i);
            $nextHeight = $smallestHeight * pow(2, $i);
            // resize previous image to next size
            $nextImage = imagecreatetruecolor($nextWidth, $nextHeight);
            imagecopyresized($nextImage, $prevImage, 0, 0, 0, 0,
                $nextWidth, $nextHeight, $prevWidth, $prevHeight);
            // apply blur filter
            imagefilter($nextImage, IMG_FILTER_GAUSSIAN_BLUR);
            // now the new image becomes the previous image for the next step
            $prevImage = $nextImage;
            $prevWidth = $nextWidth;
            $prevHeight = $nextHeight;
        }
        // scale back to original size and blur one more time
        imagecopyresized($gdImageResource, $nextImage,
            0, 0, 0, 0, $originalWidth, $originalHeight, $nextWidth, $nextHeight);
        imagefilter($gdImageResource, IMG_FILTER_GAUSSIAN_BLUR);
        //$newGdImageResource = $gdImageResource;
        //printf($originalWidth.$originalHeight);
        $newGdImageResource = imagecreatetruecolor($width, $height);
        imagecopyresampled($newGdImageResource, $gdImageResource, 0, 0, 0, 0, $width, $height, $originalWidth, $originalHeight);
        // clean up
        imagedestroy($prevImage);
        imagedestroy($gdImageResource);
        // return result
        return $newGdImageResource;
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

        //$newpic = imagecreatetruecolor($w,$h);
        $w = 200;
        $h = 200;
        $newpic = imagecreatetruecolor(200, 200);
        imagealphablending($newpic,false);
        $transparent = imagecolorallocatealpha($newpic, 0, 0, 0, 127);
        $r=$w/2;
        for($x=0;$x<$w;$x++)
            for($y=0;$y<$h;$y++){
                $c = imagecolorat($target_image,$x,$y);
                $_x = $x - $w/2;
                $_y = $y - $h/2;
                if((($_x*$_x) + ($_y*$_y)) < ($r*$r)){
                    imagesetpixel($newpic,$x,$y,$c);
                }else{
                    imagesetpixel($newpic,$x,$y,$transparent);
                }
            }
        imagesavealpha($newpic, true);

        $white_circle_res = $this->get_white_circle();
        imagesavealpha($white_circle_res, true);
        imagecopy($white_circle_res, $newpic, 5, 5, 0, 0, $w, $h);
        //imagepng($white_circle_res, "./aaaa.png");
        imagedestroy($newpic);

        return $white_circle_res;
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

    private function get_white_circle()
    {
        return imagecreatefrompng($this->white_circle);
    }

    private function get_bg()
    {
        return imagecreatefrompng($this->bg);
    }
}

