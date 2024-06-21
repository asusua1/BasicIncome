

/* ------side Bar---*/ 

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    let current = "";
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    // Check if scrolled to the bottom of the page
    if (scrollPosition >= pageHeight - 1) {
        current = sections[sections.length - 1].getAttribute('id');
    }

    document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
        anchor.classList.remove('active');
        if (anchor.getAttribute('href').substring(1) === current) {
            anchor.classList.add('active');
        }
    });
});


/*-----------imageSlider1--------------*/
let nowIndex = 1;



const imageSlider = document.querySelector('#imageSlider1');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');

bottomBtn01.addEventListener('click', moveA);
bottomBtn02.addEventListener('click', moveB);
bottomBtn03.addEventListener('click', moveC);


//move to first image.
function moveA()
{
    imageSlider.style.transform = 'translate(0px)'
    nowIndex =1;
}


/*두번째 이미지로 이동*/
function moveB()
{
    imageSlider.style.transform = 'translate(-440px)'
    nowIndex =2;

}

/*세번째 이미지로 이동*/
function moveC()
{
    imageSlider.style.transform = 'translate(-880px)'
    nowIndex =3;

}





function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}


function moveRight()
{
    if(nowIndex == 3)
    {
        nowIndex ==3;
    }
    else
    {
        nowIndex ++;
    }

    moveSlider(nowIndex);
}


function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;

        case 2:
            moveB();
        break;

        case 3:
            moveC();
        break;

    }
} 


/*-----------AI imageSlider1--------------*/
let nowIndex3 = 1;



const aiimageSlider = document.querySelector('#aiimageSlider');

const aibottomBtn01 = document.querySelector('#imgTo11');
const aibottomBtn02 = document.querySelector('#imgTo12');
const aibottomBtn03 = document.querySelector('#imgTo13');


aibottomBtn01.addEventListener('click', moveH);
aibottomBtn02.addEventListener('click', moveI);
aibottomBtn03.addEventListener('click', moveJ);


//move to first image.
function moveH()
{
    aiimageSlider.style.transform = 'translateY(0px)'
    nowIndex3 =1;
}


/*두번째 이미지로 이동*/
function moveI()
{
    aiimageSlider.style.transform = 'translateY(-350px)'
    nowIndex3 =2;

}

/*세번째 이미지로 이동*/
function moveJ()
{
    aiimageSlider.style.transform = 'translateY(-700px)'
    nowIndex3 =3;

}


function moveLeft()
{
    if(nowIndex3 == 1)
    {
        nowIndex3 ==1;
    }
    else
    {
        nowIndex3 --;
    }

    moveSlider(nowIndex3);
}


function moveRight()
{
    if(nowIndex3 == 3)
    {
        nowIndex3 ==3;
    }
    else
    {
        nowIndex3 ++;
    }

    moveSlider(nowIndex3);
}


function moveSlider(index3)
{
    switch(index3)
    {
        case 1:
            moveH();
        break;

        case 2:
            moveI();
        break;

        case 3:
            moveJ();
        break;

    }
}