class RequestQuotationpage
{
    getBreakdowncover(){return cy.get('select[id="quotation_breakdowncover"]')}
    getWindscreenrepair(){return cy.get('#quotation_windscreenrepair_f')}
    getIncidents(){return cy.get('h5>input[id="quotation_incidents"]')}
    getRegistration(){return cy.get('#quotation_vehicle_attributes_registration') }
    getAnnualmileage(){return cy.get('#quotation_vehicle_attributes_mileage') }
    getEstimatedvalue(){return cy.get('input#quotation_vehicle_attributes_value') }
    getParkingLocation(){return cy.get('#quotation_vehicle_attributes_parkinglocation') }
    getStartofpolicyYear(){return cy.get('#quotation_vehicle_attributes_policystart_1i') }
    getStartofpolicyMonth(){return cy.get('#quotation_vehicle_attributes_policystart_2i') }
    getStartofpolicyDate(){return cy.get('#quotation_vehicle_attributes_policystart_3i') }
    getCalculatePremium(){return cy.get('input[class="btn btn-default"]')}
    getSaveQuotation(){return cy.get('input[type="submit"]:nth-child(3)')}
}

export default RequestQuotationpage;