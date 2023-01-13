export interface Customer {
    id_client: String;
    name_Client: String,
    lastNameClient: String,
    number_Identification: String,
    email_Client: String,
    client_bornDate: String,
    client_Direction: String,
    tipeIdentification: String,
    creationDate: String,

}

export interface Products {
    id_account: String,
    gmf_on: String,
    type_account: String,
    estate_account: String,
    available_balance: Number,
    number_Identification: String,
    number_account: String,
}
export interface TProducts {
    id_Transaction: number,
    transaction_description: string,
    valueOfTransaction: number,
    movement_type: string,
    balance: number,
    available_balance: number,
    emiterAccount: string,
    reciberAccount: string,
    transaction_tipe: string,
    transaction_date: string,
}