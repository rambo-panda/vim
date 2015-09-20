source ~/.vimrc_

"set nocompatible             " 关闭兼容模式
set list
set listchars=tab:\|\ ,trail:+ " 显示Tab符，使用一高亮竖线代替

" 设定文件浏览器目录为当前目录   有些插件暂不能用
set autochdir

let b:javascript_fold=1		" 打开javascript折叠

"  退出vim后  恢复终端
"if &term =~ "xterm"
"" SecureCRT versions prior to 6.1.x do not support 4-digit DECSET
""     let &t_ti = "\<Esc>[?1049h"
""     let &t_te = "\<Esc>[?1049l"
"" Use 2-digit DECSET instead
"let &t_ti = "\<Esc>[?47h"
"    let &t_te = "\<Esc>[?47l"
"endif
" screen 里 在screenrc文件中 添加altscreen on
let &t_ti = "\<Esc>[?1049h"
let &t_te = "\<Esc>[?1049l"

" 搜索到文件两端时不重新搜索
"set nowrapscan
" 失去焦点 就保存
" au FocusLost *slient! up
"退出插入模式 自动保存 可以设定文件类型
"au InsertLeave * write
" 退出后自动保存
"setlocal autowriteall

"搜索  默认skeyword=@,48-57,_,192-255,$,-,#,.
set iskeyword-=.

"快捷键

"用nh去掉查找后的高亮
nmap <silent> nh :noh<CR>

"按F8、F9切换标签页按F12关闭当前标签
"nnoremap <silent> <F8> :tabp<CR>
"nnoremap <silent> <F9> :tabn<CR>
"nnoremap <silent> <F11> :tabc<CR>

"标签页栏中去除当前所编辑文件的路径信息，只保留文件名
"function ShortTabLabel ()
"    let bufnrlist = tabpagebuflist (v:lnum)
"    let label = bufname (bufnrlist[tabpagewinnr (v:lnum) -1])
"    let filename = fnamemodify (label, ':t')
"    return filename
"endfunction
set guitablabel=%{ShortTabLabel()}

" 定制 javascript快捷键  console.log
" au FileType javascript inoremap <buffer> cl console.log

"主要针对stp编辑远程
nmap WW :set buftype=""<CR>:w<CR>

set cc =115
hi ColorColumn ctermbg=10 guibg=blue

"超过79 自动折行 但是不适合中文 以及英文单词就是79个字母 ……-……   gp 是格式化命令
"set tw=79
"set formatoptions+=t

nnoremap <leader>so :source ~/.vimrc<CR>

" 保存折叠  并打开后 还能看到折叠
"au BufWinLeave * mkview
"au BufWinEnter * silent loadview

"auto bufread /Users/rambo/program/svn_MobileStudentH5/* so expandtab
auto bufread /Users/rambo/program/svn_MobileStudentH5/* set expandtab
