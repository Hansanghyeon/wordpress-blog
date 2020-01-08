# 텍스트 에디터를 Vim으로 쓰기 시작했다

> 생산성을 높이는 것 시간을 아낄 수 있는 것!

하루에 제일많이 보는 터미널과 텍스트 에디터

너무 많이봐서 질릴 때도 있고 더 효율적인 방법으로 코딩할 수 있는 방법이나 독특한 방식으로 할 수
있는 걸 찾다 Vim이라는 녀석을 만났다.

학습곡선이 너무 어렵다고한다. 그리고 IDE이있는데 쓸필요는 없다고한다.

그런데 iTerm2에서 투명한 윈도우에서 코딩 할 수 있다는거 그냥 그거 하나만 보고 Vim을 학습하기로 했다

"너무 무식했나..?"

처음 접하게된건 Plugin Vim에는 어마어마한 플러그인들이 있다해서 찾아봤다 생 Vim으로 코딩하기엔
너무도 부적절한 것같아서... 뭐 메모장에 하는 것도아니고

그러다 플러그인 설치에만 너무 삽질하다가 지칠지경에 이르다가 이 포스팅을 읽게 되었다  

[\[번역\] Vim 정복하기: 4주 계획](https://medium.com/@jungseobshin/vim-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%B2%95-4%EC%A3%BC-%EA%B3%84%ED%9A%8D-77f3f7e263f7) 내가 처음에 겪었던 플러그인 설치에대해서 배보다 배꼽이 더컷구나 생각이 들면서

일단 생 Vim부터 학습해가자고 마음을 먹고 시작한다.

그래도 가독성을 높혀주는 문법하이라이팅이랑 소소한 기능은 추가하고 시작!

Let's go!

Plugin manager

- [vim-plug](https://github.com/junegunn/vim-plug)
  ```sh
  curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  ```
- [vim-vunndle](https://github.com/VundleVim/Vundle.vim)
  ```sh
  git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
  ```

플러그인 매니저 사용하지 말라하는데 .vimrc하나만 가지로 이곳 저곳에서 나의 셋팅으로 하려고 그냥
플러그인 매니저를 사용하려한다.

```viml
" Sanghyeon Vim setting "

set nocompatible
filetype off

" vim-plug "
call plug#begin('~/.vim/plugged')

Plug 'kaicataldo/material.vim'
Plug 'SirVer/ultisnips'

call plug#end()

" vim vundel "
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'jiangmiao/auto-pairs'
Plugin 'tpope/vim-ragtag'
Plugin 'neoclide/coc.nvim'

Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

call vundle#end()

filetype plugin indent on

if has("autocmd")
	au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\""     | endif
endif

" Ultisnips
let g:UltiSnipsExpandTrigger="<Tab>"
let g:UltiSnipsJumpForwardTrigger="<Tab>"
let g:UltiSnipsJumpBackwardTrigger="<S-Tab>"
let g:UltiSnipsEditSplit="vertical"
" let g:UltiSnipsSnippetDirectories = ['~/.vim/UltiSnips']
let g:UltiSnipsSnippetDirectories = ['UltiSnips']
"" Airline
let g:airline_theme='solarized'
let g:airline_powerline_fonts=1
let g:airline_solarized_bg='dark'
" Oceanic
let g:material_terminal_italics = 1
let g:material_theme_style = 'ocean'
colorscheme material

filetype on

" KeyMap
nmap <leader>n :NERDTree<CR>

set nu			" 줄번호
syntax on		" 문법 하이라이팅
set autoindent		" 이전 라인 들여쓰기 하면 개행시 다음라인에도 자동 적용
set smartindent		"

set scrolloff=4
set tabstop=4
set softtabstop=4
set shiftwidth=4
set shiftround
set expandtab
set backspace=eol,start,indent
set textwidth=100
set hlsearch
set incsearch
set ls=2
set ut=300000
set uc=100
set laststatus=2
set noshowmode


if !has('gui_running')
	set t_Co=256
endif


filetype on
```

### Pluginlnstall

1. `:PlugInstall`
2. `:PluginInstall`
3. `:call coc#util#install()`
4. `:CocInstall coc-html`
5. `:CocInstall coc-tsserver`
6. `:CocInstall coc-css`
7. `;Cocinstall coc-json`

참고

- [vim 자동완성 기능 사용하기](https://johngrib.github.io/wiki/vim-auto-completion/#ultisnips-%EC%84%A4%EC%B9%98)  
- [Hulk | vim 설정](https://hulk89.github.io/e.t.c2018/08/31/vim_settings/)
