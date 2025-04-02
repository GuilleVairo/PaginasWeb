function updatePrice(plan) {
    let totalElement;
    let deviceSelect;
    let basePrice;

    if (plan === 'premium') {
        basePrice = 24.99; // Precio base del plan Premium en dólares
        totalElement = document.getElementById('premium-total');
        deviceSelect = document.getElementById('premium-devices');
    } else if (plan === 'empresa') {
        basePrice = 49.99; // Precio base del plan Empresa en dólares
        totalElement = document.getElementById('empresa-total');
        deviceSelect = document.getElementById('empresa-devices');
    }

    const numberOfDevices = parseInt(deviceSelect.value);
    const totalPrice = (basePrice * numberOfDevices).toFixed(2); // Multiplica el precio base por el número de dispositivos y formatea a 2 decimales
    totalElement.textContent = `Total: $${totalPrice}`; // Actualiza el texto del total
}