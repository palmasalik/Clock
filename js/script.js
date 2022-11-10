const hour = document.querySelector('.h')
min = document.querySelector('.m')
sec = document.querySelector('.s')

const hoursBlock = document.querySelector('.hours')
      minuteBlock = document.querySelector('.minutes'),
      check = document.querySelector('#check'),
      audio = document.querySelector('audio')
      
      

function clock() {
    
    let time = new Date()
    second = time.getSeconds() * 6,
    minutes = time.getMinutes(),
    hours = time.getHours()
  
    
    sec.animate([
        {
            transform: `rotate(${second}deg)`
        },
        {
            transform: `rotate(${second + 6}deg)`
        }
    ],{
        fill: 'forwards',
        duration: 1000,
        easing: 'linear'
    })
    
    min.style = `transform: rotate(${minutes * 6}deg);transition: .5s`
    hour.style = `transform: rotate(${(hours * 30) + (minutes / 12)}deg);transition: .5s`
    
    
    
    hoursBlock.innerHTML = hours < 10 ? '0' + hours : hours
    minuteBlock.innerHTML = minutes < 10 ? '0' + minutes : minutes
    
    
    if (check.checked) {
        audio.play()
    }else{
        audio.pause()
    }
    
    
    
    
    setTimeout(() => clock(), 1000);
}
clock()

const tabsLink = document.querySelectorAll('.tabsItem'),
      tabsContent = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsLink.length; i++) {
    tabsLink[i].addEventListener('click', function () {
        
        for (let x = 0; x < tabsLink.length; x++) {
            tabsLink[x].classList.remove('active')
            tabsContent[x].classList.remove('active')
        }
        
        
        tabsContent[i].classList.add('active')
        tabsLink[i].classList.add('active')
    })
}

const watchBtn = document.querySelector('.stopwatch__btn')
      secondWatch = document.querySelector('.stopwatch__seconds')
      minutesWatch = document.querySelector('.stopwatch__minutes')
      hoursWatch = document.querySelector('.stopwatch__hours')

watchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop'
        let i = 0 
        stopWatch(this, i)
    }else if(this.innerHTML == 'stop'){
        this.innerHTML = 'clear'
    }else if(this.innerHTML == 'clear'){
        this.innerHTML = 'start'
        secondWatch.innerHTML = 0
        minutesWatch.innerHTML = 0
        hoursWatch.innerHTML = 0
    }
})

function stopWatch(el, i) {
    if (el.innerHTML == 'stop') {
        if (i == 59) {
            i = 0
            secondWatch.innerHTML = i
            if (minutesWatch.innerHTML == 59) {
                minutesWatch.innerHTML = 0
                hoursWatch.innerHTML++
            }else{
                minutesWatch.innerHTML++
            }
        }else {
            i++
            secondWatch.innerHTML = i
        }
        setTimeout(() => {
            stopWatch(el, i)
        }, 1000);
    }
    
}





















