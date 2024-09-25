// Al hacer clic en "Confirmar Asistencia"
document.querySelector('.Siconfirm-btn').addEventListener('click', function() {
    
    const adultNames = document.getElementById('adultNames').value.trim();
    const childName = document.getElementById('childName').value.trim();

    
    if (adultNames) {
       
        window.location.href = `indexConfirmacion.html?adultNames=${encodeURIComponent(adultNames)}&childName=${encodeURIComponent(childName)}`;
    } else {
        alert('completa al menos el nombre del adulto no mames.');
    }
});


document.querySelector('.NoconfBtn').addEventListener('click', function() {
    
    document.getElementById('noConfirmModal').style.display = 'block';
});


document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('noConfirmModal').style.display = 'none';
});


if (window.location.pathname.endsWith('indexConfirmacion.html')) {
    
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            adultNames: params.get('adultNames'), 
            childName: params.get('childName') 
        };
    }

   
    const { adultNames, childName } = getQueryParams();

    
    const formattedAdultNames = adultNames ? adultNames : 'Nombre del adulto';
    const formattedChildName = childName ? childName : 'Nombre del Niño';

   
    let greetingMessage = `${formattedAdultNames}`;
    
    // Solo agregar "y" y el nombre del niño si existe
    if (formattedChildName) {
        greetingMessage += ` y ${formattedChildName}`;
    }
    
    greetingMessage += `, gracias por aceptar la invitación!`;

    
    document.getElementById('greetingMessage').innerText = greetingMessage;
}


function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        adultNames: params.get('adultNames') || 'Nombre del adulto',
        childName: params.get('childName') || '' 
    };
}


const { adultNames, childName } = getQueryParams();


let greetingMessage = `${adultNames}`;
if (childName) {
    greetingMessage += ` y ${childName}`
}
greetingMessage += `, gracias por aceptar la invitación.`;


document.getElementById('greetingMessage').innerText = greetingMessage;

