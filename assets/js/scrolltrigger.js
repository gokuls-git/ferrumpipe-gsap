// console.clear();
// first canvas---------------
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1640;
canvas.height = 993;

const frameCount = 109;
const currentFrame = index => (
 
  `https://cdn.cuberto.com/fp/img/hero/hero_${(index + 1).toString().padStart(1)}.jpg`
);

const images = []
const pipe = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(pipe, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub:0.5,
    markers:true,
    start: "0% 25%",
    end: "50% 75%",

  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[pipe.frame], 0, 0); 
}


// -----------------------------------------------------------------------------------

// sizes---------------------------------
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    // markers: true,
    // pin:`.fp-sizes-txt`,
    start: "top 60%",
    end: "bottom 40%",
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 90, autoAlpha: 0 },
        {
          duration: 2.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -50, autoAlpha: 0 },
        {
          duration: 2.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});

// ----------------------------------------------------------------------------


// sizeScrollCanvas-----
const canvasSizeScroll = document.getElementById("hero-sizeScroll");
const context_2 = canvasSizeScroll.getContext("2d");

canvasSizeScroll.width = 1920;
canvasSizeScroll.height = 1080;

const frameCount_2 = 218;
const currentFrame_2 = index => (
 
  `https://cdn.cuberto.com/fp/img/options/options_${(index + 1).toString().padStart(1)}.jpg`
  
);

const images_2 = []
const ferrumPipe = {
  frame: 0
};

for (let i = 0; i < frameCount_2; i++) {
  const img_2 = new Image();
  img_2.src = currentFrame_2(i);
  images_2.push(img_2);
}

gsap.to(ferrumPipe, {
  frame: frameCount_2 - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin:`.fp-second-framescroll-wrap`,
    // markers:true,
    start: "top top", // When the top of the trigger reaches the top of the viewport
    // end: '+=10000px',
    anticipatePin: 1,
  },
  onUpdate: render_2 // use animation onUpdate instead of scrollTrigger's onUpdate
});

images_2[0].onload = render_2;

function render_2() {
  context_2.clearRect(0, 0, canvasSizeScroll.width, canvasSizeScroll.height);
  context_2.drawImage(images_2[ferrumPipe.frame], 0, 0); 
}

// // advantages------------------
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     // markers: true,
//     // pin:`.fp-sizes-txt`,
//     start: "top 60%",
//     end: "bottom 40%",
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 90, autoAlpha: 0 },
//         {
//           duration: 2.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: -50, autoAlpha: 0 },
//         {
//           duration: 2.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });

// // advantagesScroll-------------

// const canvasSizeScrollTwo = document.getElementById("hero-sizeScroll-3");
// const context_3 = canvasSizeScrollTwo.getContext("2d");

// canvasSizeScrollTwo.width = 1920;
// canvasSizeScrollTwo.height = 1080;

// const frameCount_3 = 424;
// const currentFrame_3 = index => (
 
//   `https://cdn.cuberto.com/fp/img/advantages/advantages_${(index + 1).toString().padStart(1)}.jpg`
  
// );

// const images_3 = []
// const advantages = {
//   frame: 0
// };

// for (let i = 0; i < frameCount_3; i++) {
//   const img_3 = new Image();
//   img_3.src = currentFrame_3(i);
//   images_3.push(img_3);
// }

// gsap.to(advantages , {
//   frame: frameCount_3 - 1,
//   snap: "frame",
//   ease: "none",
//   scrollTrigger: {
//     scrub: true,
//     pin:`.fp-third-framescroll-wrap`,
//     // markers:true,
//     start: "top top", // When the top of the trigger reaches the top of the viewport
//     // end: '+=10000px',
//     // anticipatePin: 1,
//   },
//   onUpdate: render_3 // use animation onUpdate instead of scrollTrigger's onUpdate
// });

// images_3[0].onload = render_3;

// function render_3() {
//   context_3.clearRect(0, 0, canvasSizeScrollTwo.width, canvasSizeScrollTwo.height);
//   context_3.drawImage(images_3[advantages .frame], 0, 0); 
// }


// // colors---------------
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     // markers: true,
//     // pin:`.fp-sizes-txt`,
//     start: "top 60%",
//     end: "bottom 40%",
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 90, autoAlpha: 0 },
//         {
//           duration: 2.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: -50, autoAlpha: 0 },
//         {
//           duration: 2.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });

// // colorsScroll------------------


// const canvasSizeScrollThree = document.getElementById("hero-sizeScroll-4");
// const context_4 = canvasSizeScrollThree.getContext("2d");

// canvasSizeScrollThree.width = 1920;
// canvasSizeScrollThree.height = 1080;

// const frameCount_4 = 65;
// const currentFrame_4 = index => (
 
//   `https://cdn.cuberto.com/fp/img/colors/colors_${(index + 1).toString().padStart(1)}.jpg`
  
// );

// const images_4 = []
// const colors = {
//   frame: 0
// };

// for (let i = 0; i < frameCount_4; i++) {
//   const img_4 = new Image();
//   img_4.src = currentFrame_4(i);
//   images_4.push(img_4);
// }

// gsap.to(colors , {
//   frame: frameCount_4 - 1,
//   snap: "frame",
//   ease: "none",
//   scrollTrigger: {
//     scrub: true,
//     pin:`.fp-fourth-framescroll-wrap`,
//     // markers:true,
//     start: "top top", // When the top of the trigger reaches the top of the viewport
//     // end: '+=10000px',
//     // anticipatePin: 1,
//   },
//   onUpdate: render_4 // use animation onUpdate instead of scrollTrigger's onUpdate
// });

// images_4[0].onload = render_4;

// function render_4() {
//   context_4.clearRect(0, 0, canvasSizeScrollThree.width, canvasSizeScrollThree.height);
//   context_4.drawImage(images_4[colors .frame], 0, 0); 
// }


// // fenceScroll-------------

// const canvasSizeScrollFour = document.getElementById("hero-sizeScroll-5");
// const context_5 = canvasSizeScrollFour.getContext("2d");

// canvasSizeScrollFour.width = 1920;
// canvasSizeScrollFour.height = 1080;

// const frameCount_5 = 107;
// const currentFrame_5 = index => (
 
//   `https://cdn.cuberto.com/fp/img/fence/fence_${(index + 1).toString().padStart(1)}.jpg`
  
// );

// const images_5 = []
// const fence = {
//   frame: 0
// };

// for (let i = 0; i < frameCount_5; i++) {
//   const img_5 = new Image();
//   img_5.src = currentFrame_5(i);
//   images_5.push(img_5);
// }

// gsap.to(fence , {
//   frame: frameCount_5 - 1,
//   snap: "frame",
//   ease: "none",
//   scrollTrigger: {
//     scrub: true,
//     pin:`.fp-fifth-framescroll-wrap`,
//     // markers:true,
//     start: "top top", // When the top of the trigger reaches the top of the viewport
//     // end: '+=10000px',
//     // anticipatePin: 1,
//   },
//   onUpdate: render_5 // use animation onUpdate instead of scrollTrigger's onUpdate
// });

// images_5[0].onload = render_5;

// function render_5() {
//   context_5.clearRect(0, 0, canvasSizeScrollFour.width, canvasSizeScrollFour.height);
//   context_5.drawImage(images_5[fence .frame], 0, 0); 
// }