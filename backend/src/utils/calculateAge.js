export const calculateAge = birthDateString => {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    
    // Initial year calculation
    let age = today.getFullYear() - birthDate.getFullYear();
    
    // Calculate month difference
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if the birthday hasn't happened yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}