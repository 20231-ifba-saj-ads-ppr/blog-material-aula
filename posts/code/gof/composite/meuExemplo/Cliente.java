package meuExemplo;

public class Cliente {
    public static void main(String[] args) {
        Component celular1 = new Produto("Xiaomi Redmi Note 12", "Marca: Xiaomi,\nAno: 2023,\nRAM: 4GB,\nROM: 128GB,\nProcessador: Snapdragon\n", "RN100", 1.171);
        Component celular2 = celular1.clone();
        Component celular3 = celular1.clone();

        Component pacote1 = new Pacote("Redmi Note 12", "Pacote com 3 unidades do smartphone Note 12", "RN1000");
        pacote1.adicionar(celular1, celular2, celular3);

        System.out.println(pacote1);
        //Nome: Redmi Note 12 
          //[Nome: Xiaomi Redmi Note 12 - Preço: 1.171 - ID: RN100,
          //Nome: Xiaomi Redmi Note 12 - Preço: 1.171 - ID: RN100,
          //Nome: Xiaomi Redmi Note 12 - Preço: 1.171 - ID: RN100] - ID: RN1000
        System.out.println(pacote1.getPreco());
        //3.513
        
        Component tablet1 = new Produto("Lenovo Tab P11 Plus", "Pacote: Lenovo,\nAno: 2021,\nRAM: 4GB,\nROM: 64GB\n", "LTPP100", 1.899);
        Component tablet2 = tablet1.clone();
        Component tablet3 = tablet1.clone();

        Component pacote2 = new Pacote("Tab P11 Plus", "Lote com 3 unidades do tablet P11", "LTPP1000");
        pacote2.adicionar(tablet1, tablet2, tablet3);

        System.out.println(pacote2);
        //Nome: Tab P11 Plus 
          //[Nome: Lenovo Tab P11 Plus - Preço: 1.899 - ID: LTPP100,
          //Nome: Lenovo Tab P11 Plus - Preço: 1.899 - ID: LTPP100,
          //Nome: Lenovo Tab P11 Plus - Preço: 1.899 - ID: LTPP100] - ID: LTPP1000
        System.out.println(pacote2.getPreco());
        //5.697

        Component pacote3 = new Pacote("Redmi Note 12 || Tab P11 Plus", "Pacote com 2 pacotes, um com celulares e outro com tablets, além de Redmi Note 12 indívidual", "RNLTPP100");
        Component celular4 = celular1.clone();
        pacote3.adicionar(pacote1, pacote2, celular4);

        System.out.println(pacote3);
        //Nome: Redmi Note 12 || Tab P11 Plus 
          //[Nome: Redmi Note 12 
            //[Nome: Xiaomi Redmi Note 12 - Preço: 1.171 - ID: RN100, 
            //Nome: Xiaomi Redmi Note 12 - Preço: 1.171 - ID: RN100,
            //Nome: Xiaomi Redmi Note 12 - Preço: 1.171 - ID: RN100] - ID: RN1000,
          //Nome: Tab P11 Plus 
            //[Nome: Lenovo Tab P11 Plus - Preço: 1.899 - ID: LTPP100,
            //Nome: Lenovo Tab P11 Plus - Preço: 1.899 - ID: LTPP100,
            //Nome: Lenovo Tab P11 Plus - Preço: 1.899 - ID: LTPP100] - ID: LTPP1000,
          //Nome: Xiaomi Redmi Note 12 - Preço: 1.171 - ID: RN100] - ID: RNLTPP100
        System.out.println(pacote3.getPreco());
        //10.381
    }
}
