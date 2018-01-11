var items = [];
        $.getJSON("https://picsum.photos/list", function(data){
            $.each(data, function(key, val){
                items.push(val);
            })
            
        }).then(function(){
            console.log(items[0]);
            console.log(items[0].id)
            
            function getPhotos(photoID){
                $(".photo-container:nth-of-type(" + 1 + ")").css("background-image", "url(https://picsum.photos/" + items[photoID].width/3 + "/" + items[photoID].height/3 + "?image=" + items[photoID].id + ")");
                $(".photo-container:nth-of-type(" + 2 + ")").css("background-image", "url(https://picsum.photos/" + items[photoID+1].width/3 + "/" + items[photoID+1].height/3 + "?image=" + items[photoID+1].id + ")");
                $(".photo-container:nth-of-type(" + 3 + ")").css("background-image", "url(https://picsum.photos/" + items[photoID+2].width/3 + "/" + items[photoID+2].height/3 + "?image=" + items[photoID+2].id + ")");
            }
            let i=0;
            
            getPhotos(i);
            
            $(".button-next").on("click", ()=>{
                i+=3;
                getPhotos(i);
                
                if(i>items.length){
                    i=0;
                }
            })
            
        })

$(".button-next").on("mousedown", ()=>{
    $(".button-next").addClass("active");
})
$(".button-next").on("mouseup", ()=>{
    $(".button-next").removeClass("active");
})