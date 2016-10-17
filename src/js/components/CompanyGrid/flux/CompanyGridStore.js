import alt from '../../../alt';
import CompanyGridActions from './CompanyGridActions';

class CompanyGridStore {
    constructor() {
        this.dataCompanies = [
            {
                "id": "1",
                "inn": "999999943",
                "company": "СтандартИндустрия",
                "boss": "Новиков"
            },
            {
                "id": "2",
                "inn": "7542346",
                "company": "МонолитТехно",
                "boss": "Смирнов"
            },
            {
                "id": "3",
                "inn": "6547645345",
                "company": "МастерАрхитект",
                "boss": "Иванов"
            },
            {
                "id": "4",
                "inn": "345234524",
                "company": "СнабМонолит",
                "boss": "Кузнецов"
            },
            {
                "id": "5",
                "inn": "23523423423",
                "company": "КирпичТехника",
                "boss": "Попов"
            },
            {
                "id": "6",
                "inn": "4235234234",
                "company": "Регион-Трейдинг",
                "boss": "Соколов"
            }

        ];


    }


}

export default alt.createStore(CompanyGridStore, 'companyGridStore');