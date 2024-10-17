import '../Archive.css';

function Archive () {
    return (
        <div class= "grid-container">
            <div class = "grid-item">
                <p class="archive-name">005 - Updates & Changes Going Forward</p>
                <time datetime="2023-03-24">Mar 24, 2023</time>
            </div>
            <div class = "grid-item">
                <p class="archive-name">004 - Start to Spring Semester</p>
                <time datetime="2023-01-27">Jan 27, 2023</time>
            </div>
            <div class = "grid-item">
                <p class="archive-name">003 - Moda's Fall Fashion Show</p>
                <time datetime="2022-11-14">Nov 14, 2022</time>
            </div>
            <div class = "grid-item">
                <p class="archive-name">002 - So Long October, Hello November</p>
                <time datetime="2022-11-22">Nov 1, 2022</time>
            </div>
            <div class= "grid-item">
                <p class="archive-name">001 - Welcome to Moda's Newsletter</p>
                <time datetime="2022-10-21">Oct 21, 2022</time>
            </div>
        </div>
    )
}

export default Archive;