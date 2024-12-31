const freshProfile = {};

const emailProfile = {
    id:'12345609876',
    email: 'sm@gm.com'
};

const newsLetterSubscriptionProfile = {
    id:'12345609876',
    email: 'sm@gm.com',
    newsLetterSubscribed: true
}

const personalInformationProfile = {
    id:'12345609876',
    email: 'sm@gm.com',
    firstName: 'sai',
    middleName: 'krishna',
    lastname: 'sharma',
    address: '8, new Arya Nagar, Jail road Jail chungi Meerut',
    city: 'Meerut',
    state: 'Uttar Pradesh',
    pincode: '250001',
    mobileNumber: '123456790',
    altMobileNumber: '0987654321',
    personalInformationAdded: true
}

const personalInformationProfileWithNewsLetterSubscribed = {
    id:'12345609876',
    email: 'sm@gm.com',
    newsLetterSubscribed: true,
    firstName: 'sai',
    middleName: 'krishna',
    lastname: 'sharma',
    address: '8, new Arya Nagar, Jail road Jail chungi Meerut',
    city: 'Meerut',
    state: 'Uttar Pradesh',
    pincode: '250001',
    mobileNumber: '123456790',
    personalInformationAdded: true
};

module.exports = {
    freshProfile,
    emailProfile,
    newsLetterSubscriptionProfile,
    personalInformationProfile,
    personalInformationProfileWithNewsLetterSubscribed
}