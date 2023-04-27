
let currentDroppable = null;

stick_mix.onmousedown = function(event) {
    stick_mix.style.position = 'absolute';
    stick_mix.style.zIndex = 1000;

    document.body.append(stick_mix);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        stick_mix.style.left = pageX - stick_mix.offsetWidth / 2 + 'px';
        stick_mix.style.top = pageY - stick_mix.offsetHeight / 2 + 'px';
    }

  

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

            stick_mix.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            stick_mix.hidden = false;
        
            if (!elemBelow) return;
        
            let droppableBelow = elemBelow.closest('.stick_png');
        
            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    leaveDroppable(currentDroppable);
                    console.log('.bowl');
                   //enterDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    //leaveDroppable(currentDroppable);
                    enterDroppable(currentDroppable);

                }
            }
        
    }

    document.addEventListener('mousemove', onMouseMove);

    stick_mix.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        stick_mix.onmouseup = null;
    };
};

function enterDroppable(elem) {
    //elem.style.background = 'pink';
    // elem.classList.remove("bowl");
    // elem.classList.remove("bowl_back");
    // elem.classList.remove("bowl_front");
    elem.classList.remove("stick");
    elem.classList.add("mixing_stick");

  }

  function leaveDroppable(elem) {
   //elem.style.background = '';
   elem.classList.remove("mixing_stick");
   elem.classList.add("stick");
//    elem.classList.add("bowl");
  }

stick_mix.ondragstart = function() {
    return false;
};

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }




