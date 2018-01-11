var items = [];
$.getJSON("https://picsum.photos/list", function (data) {
    $.each(data, function (key, val) {
        items.push(val);
    })

}).then(function () {
    console.log(items[0]);
    console.log(items[0].id)

    function getPhotos(photoID) {
        $(".photo-container:nth-of-type(" + 1 + ")").css("background-image", "url(https://picsum.photos/" + items[photoID].width / 3 + "/" + items[photoID].height / 3 + "?image=" + items[photoID].id + ")");
        $(".photo-container:nth-of-type(" + 2 + ")").css("background-image", "url(https://picsum.photos/" + items[photoID + 1].width / 3 + "/" + items[photoID + 1].height / 3 + "?image=" + items[photoID + 1].id + ")");
        $(".photo-container:nth-of-type(" + 3 + ")").css("background-image", "url(https://picsum.photos/" + items[photoID + 2].width / 3 + "/" + items[photoID + 2].height / 3 + "?image=" + items[photoID + 2].id + ")");
    }
    let i = 0;

    getPhotos(i);
    
    i=3;

    $(".button-next").on("click", () => {
        if (items.length-i<=4){
                let end = items.length - i - 1;
                console.log(end + 'end');
                console.log(i);
                if(end==0){
                    i-=2;
                    getPhotos(i);
                }
                else if(end==1){
                    i-=1;
                    getPhotos(i);
                    i=0;
                }
                else if(end==2){
                    getPhotos(i);
                    i=0;
                }
            }
            else{
                getPhotos(i);
                i += 3;
            }
    })
    window.addEventListener("keydown", (e) => {
        console.log(e.which);
        if (e.keyCode == "39") {
            console.log(i);
            console.log(items.length - i - 2);

            if (items.length-i<=4){
                let end = items.length - i - 1;
                console.log(end + 'end');
                console.log(i);
                if(end==0){
                    i-=2;
                    getPhotos(i);
                }
                else if(end==1){
                    i-=1;
                    getPhotos(i);
                    i=0;
                }
                else if(end==2){
                    getPhotos(i);
                    i=0;
                }
            }
            else{
                getPhotos(i);
                i += 3;
            }
        }
    })
    window.addEventListener("keydown", (e) => {
        console.log(e.which);
        if (e.keyCode == "37") {
            i -= 3;

            if (i < 0) {
                i = items.length - 3;
            }
            getPhotos(i);
        }
    })
})

$(".button-next").on("mousedown", () => {
    $(".button-next").addClass("active");
})
$(".button-next").on("mouseup", () => {
    $(".button-next").removeClass("active");
})
