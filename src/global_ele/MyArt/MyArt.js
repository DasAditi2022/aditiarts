import React, { useState }from "react"
import "./MyArt.css"
import Data from "./Data.js"
const MyArt = () =>{
    const [items, setItems] = useState(Data);
    // var modal = document.getElementById("myModal");
    // var img = document.getElementById("myImg");
    // var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");
    //     img.onclick = function(){
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // }
    // var span = document.getElementsByClassName("close")[0];
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    const filterItem = (catItem) =>{
        const updatedItems = Data.filter((curElem)=>{
            return curElem.category === catItem;
        })
        setItems(updatedItems);
    }

    const open_content_fullscreen = () => {
        let elem = document.querySelector('.content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    }
    return(
        <section className="myart section" id='myart'>
            <h2 className='section-title'>My Art</h2>
            <span className='section-subtitle'>Most Recent Works</span>

            <div className='work-nav-container container grid'>
                <button className ='cat-name button button-flex' onClick={()=>setItems(Data)}>All</button>
                <button className ='cat-name button button-flex' onClick={()=>filterItem('Paintings')}>Paintings</button>
                <button className ='cat-name button button-flex' onClick={()=>filterItem('Mandala')}>Mandala</button>
                <button className ='cat-name button button-flex' onClick={()=>filterItem('Crafts')}>Crafts</button>
            </div>

            <div className="work-detail-container container grid">
            {
                items.map((elem) => {
                    const {id, image, title, category} = elem;
                    return(                   
                            <div className="work-details container" key={id}>
                                <a href={image} >
                                    <img src={image} alt={title} className="work-pic" id="myImg"/>
                                </a>
                                <h3 className="work-title">{title}</h3>
                            </div>
                    )
                })
            }
            </div>

        </section>
    )
}

export default MyArt