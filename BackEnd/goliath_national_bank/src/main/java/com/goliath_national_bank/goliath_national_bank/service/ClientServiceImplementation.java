package com.goliath_national_bank.goliath_national_bank.service;

import com.goliath_national_bank.goliath_national_bank.entity.Client;
import com.goliath_national_bank.goliath_national_bank.repository.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImplementation implements ClientService {
    @Autowired
    ClientRepository clientRepository;

    @Override
    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> getClientById(int id) {
        return clientRepository.findById(id);
    }

    @Override
    public boolean deleteClientById(int id) {
        return getClientById(id).map(client ->
        {
            clientRepository.deleteById(id);
            return true;
        }).orElse(false);
    }

    @Override
    public Client updateClient(Client client) {
        boolean resourseFound = false;
        for(Client currentClient: getAllClients()){

            if(currentClient.getId_client() == client.getId_client()){

                resourseFound = true;
                currentClient.setId_client(client.getId_client());
                currentClient.setTipeIdentification(client.getTipeIdentification());
                currentClient.setClient_Direction(currentClient.getClient_Direction());
                currentClient.setEmail_Client(client.getEmail_Client());
                currentClient.setName_Client(client.getName_Client());
                currentClient.setClient_bornDate(client.getClient_bornDate());
                currentClient.setLastNameClient(client.getLastNameClient());
                currentClient.setUser_modification(client.getUser_modification());
                currentClient.setCreation_user(client.getCreation_user());
                currentClient.setUser_modification(client.getUser_modification());
            }

        }
        if(!resourseFound) getAllClients().add(client);
        return clientRepository.save(client);
    }
}
