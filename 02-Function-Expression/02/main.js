const showModal = alert;
showModal('Execute modal'); // *
// alert('Execute modal')

const showModal = alert();
showModal('Execute modal');
// "" showModal('Execute modal') = alert()('Execute modal')
