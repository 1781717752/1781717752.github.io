const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    lrcType: 3, //此为歌词格式，没有歌词可以直接删掉这一行
    audio: [
        {
            name: '花の塔',//歌曲名
            artist: 'さユり',//歌曲作者
            url: 'http://music.163.com/song/media/outer/url?id=1956534872.mp3',//歌曲链接
            cover: 'https://p2.music.126.net/fS_5RbP_4qg-RYreqp2tGg==/109951167558017839.jpg?param=130y130',//歌曲图片
            lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc',//歌词
            theme: '#ebd0c2'
        },
        {
            name: '花の塔',
            artist: 'さユり',
            url: 'http://music.163.com/song/media/outer/url?id=1956534872.mp3',
            cover: 'https://p2.music.126.net/fS_5RbP_4qg-RYreqp2tGg==/109951167558017839.jpg?param=130y130',
            lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc'
            theme: '#46718b'
        }
    ]
});
