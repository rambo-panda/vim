vim   首先感谢 k-vim作者的支持
===

适合前端开发的vim配置

主要针对 sass/css  javascript  emmet 前端模板颜色<% %>高亮  以及shell

配色为：solarized

完美支持git

亲测：mac centos ubuntu 完美运行



TODO:
此版本为第一次上传版本。  下面是以后要做的努力
1：  制作install.sh  自动化安装
2:   各种插件的使用说明

####简单使用
* mkdir -p ~/.vim && cp vim_config_dir/* ~/.vim
* git clone https://github.com/gmarik/vundle.git ~/.vim/bundle/vundle
* mkdir ~/old_vim && cp ~/.vim* ~/old_vim
* cp .vim* ~/
* vim 进去之后 :BundleInstall
