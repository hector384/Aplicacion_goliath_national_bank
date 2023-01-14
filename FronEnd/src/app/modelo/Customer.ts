export interface Customer {
    id_client: number;
    name_Client: string,
    lastNameClient: string,
    number_Identification: string,
    email_Client: string,
    client_bornDate: string,
    client_Direction: string,
    tipeIdentification: string,
    creationDate: string,

}

export interface Products {
    id_account: string,
    gmf_on: string,
    type_account: string,
    estate_account: string,
    available_balance: number,
    number_Identification: string,
    number_account: string,
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
