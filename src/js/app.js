import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 5,
        originLeft: false,
        horizontalOrder: false,
        // horizontalOrder: false,
        percentPosition: true,
        resize: true,
        columnWidth: 6,
    });
    masonry.on('layoutComplete', () => console.log('Layout Complete'));
};