
package com.goliath_national_bank.goliath_national_bank.controller;


import com.goliath_national_bank.goliath_national_bank.entity.Client;
import com.goliath_national_bank.goliath_national_bank.repository.ClientRepository;
import com.goliath_national_bank.goliath_national_bank.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PostUpdate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clients")
public class ClientController {



    @Autowired
    ClientService clientService;
    @Autowired
    private ClientRepository clientRepository;

    @GetMapping
    public ResponseEntity<List<Client>> getClients(){
        return new ResponseEntity<>(clientService.getAllClients(),HttpStatus.OK);

    }
    @GetMapping("/g/{id}")
    public ResponseEntity<Client>  getClientById (@PathVariable ("id") int id){
        return clientService.getClientById(id).map(
                client -> new ResponseEntity<>(client, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/post")
    public ResponseEntity<Client> createClients (@RequestBody Client client){
        return new ResponseEntity<>(clientService.createClient(client),
                HttpStatus.CREATED
                );
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteClientbyID (@PathVariable("id") int id){
        if(clientService.deleteClientById(id)){
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/put/{id}")
    public ResponseEntity<Client> updateClient(@RequestBody Client client){
        return new ResponseEntity<>(clientService.updateClient(client), HttpStatus.OK);



    }


}
