import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 6,
        originLeft: false,
        horizontalOrder: false,
        // horizontalOrder: false,
        percentPosition: true,
        resize: true,
        columnWidth: 4,
    });
    masonry.on('layoutComplete', () => console.log('Layout Complete'));
};