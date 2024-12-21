import setModalProps from './setModalProps.mjs'
const applyCardStyling = (result, card) => {
   if (result) {
      card.classList.add('border', 'border-5', 'border-success')
      setModalProps(modalTitle, modalBody,{
         type: 'success',
         header: 'Captcha is Passed successfully',
         body: `human verification is passed successfully`,
         // action: 'close',
      });
      (() => {
         let timeleft = 3
         const modalBody = document.querySelector('.modal-body')
         const timerInterval = setInterval(() => {
            modalBody.textContent = `human verification is passed successfull
   you will be redirected to the website in ${timeleft} seconds`
            timeleft--
            if (timeleft < 0) {
               clearInterval(timerInterval)
               window.location.href = 'passed.com'
            }
         }, 1000)
      })()
   } else {
      card.classList.add('border', 'border-5', 'border-danger')
      setModalProps({
         type: 'danger',
         header: 'Failed Captcha',
         body: 'You choosed the wrong card, you can try again after the reload',
         // action: 'try again'
      });

   }

}
export default applyCardStyling