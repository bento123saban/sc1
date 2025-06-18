                                                                                                                                                                        


const navButton = document.getElementById('nav-button'),
  navLinks      = document.querySelectorAll('.nav-link'),
  contents      = document.querySelectorAll('.content'),
  monthlyBars   = document.querySelectorAll('#monthly-diagram .diag-bar-box'),
  monthlyDetail = document.querySelector('#monthly-detail'),
  mDetailClose  = document.querySelector('#monthly-detail-close'),
  dailyBars     = document.querySelectorAll('#daily-diagram .diag-bar-box'),
  dailyDetail   = document.querySelector('#daily-detail'),
  dDetailClose  = document.querySelector('#daily-detail-close'),
  diagControl   = document.querySelectorAll('.diagram-control'),
  dateDetail    = document.querySelector('#date-detail'),
  dateBoxs      = document.querySelectorAll('.date-box'),
  dateDetailCls = document.querySelector('#date-detail-close'),
  weekDatas     = document.querySelectorAll('.week-data'),
  weekDetail    = document.querySelector('#week-detail'),
  weekDtlCls    = document.querySelector('#week-detail-close'),
  deptBoxs      = document.querySelectorAll('.dept-box'),
  deptDtlCls    = document.querySelector('#dept-detail-close'),
  deptDetail    = document.querySelector('#dept-detail'),
  schInputs     = document.querySelectorAll('.sch-input'),
  schCodes      = document.querySelector("#sch-code-list")
  
  
  
  
  

navButton.addEventListener('click', () => {
  navButton.classList.toggle('active');
});
navLinks.forEach( link => {
  link.onclick = function () {
    navLinks.forEach(lx => lx.classList.remove('active'))
    link.classList.add('active')
    contents.forEach(content => {
      content.id == link.dataset.target ? content.classList.remove('dis-none') : content.classList.add('dis-none');
      navButton.classList.remove('active');
    })
    
  }
})
monthlyBars.forEach(bar => {
  bar.onclick = () => monthlyDetail.classList.add('active')
})
mDetailClose.onclick = () => monthlyDetail.classList.remove('active')
dailyBars.forEach(bar => {
  bar.onclick = () => dailyDetail.classList.add('active')
})
dDetailClose.onclick = () => dailyDetail.classList.remove('active')
diagControl.forEach(ctrl => {
  ctrl.onclick = function() {
    
  }
})
dateBoxs.forEach(box => {
  box.onclick = () => dateDetail.classList.remove('dis-none')
})
dateDetailCls.onclick = () => dateDetail.classList.add('dis-none')
weekDatas.forEach(week => {
  week.onclick = () => weekDetail.classList.remove('dis-none')
})
weekDtlCls.onclick = () => weekDetail.classList.add('dis-none')
deptBoxs.forEach(dept => {
  dept.onclick = () => deptDetail.classList.add('active')
})
deptDtlCls.onclick = () => deptDetail.classList.remove('active')
schInputs.forEach(input => {
  input.onfocus = () => {
    schCodes.classList.remove('dis-none')
    input.id = 'active-sch'
    console.log("Focus " + input.id)
  }
  input.onblur = () => schCodes.classList.add('dis-none')
})
schCodes.querySelectorAll('span').forEach(span => {
  span.onclick = () => document.querySelector("active-sch").value = span.textContent
})


