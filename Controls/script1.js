const myText = new SplitType('#my-text')

// const myText = new SplitType('#my-text', { types: 'chars' })
// const chars = myText.chars

gsap.to( '.char' , {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1,
    scrollTrigger: {
        trigger:"#my-text",
        start: "top 40%",
        markers: true,
        onEnter: () => '.char.play()',
        onLeaveBack: () => '.char.reverse()'
    }
})
