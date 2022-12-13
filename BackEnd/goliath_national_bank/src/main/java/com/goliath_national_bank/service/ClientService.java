package com.goliath_national_bank.service;
import com.goliath_national_bank.entity.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {

    public Client createClient(Client client);
    public List<Client> getAllClients();
    public Optional<Client>  getClientById(int id);
    public boolean deleteClientById (int id);




}
