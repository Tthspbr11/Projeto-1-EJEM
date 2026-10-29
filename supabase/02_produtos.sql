-- Cadastro inicial do catálogo.
-- Execute uma única vez, após 01_estrutura.sql.
-- Não execute novamente no banco que já contém esses produtos.

begin;

insert into public.produtos (nome, descricao, preco)
values
  ('Sorvete de Casquinha',
   '1 bola: baunilha, chocolate ou morango.', 4.00),

  ('Picolé de Chocolate',
   'Picolé cremoso de chocolate.', 5.00),

  ('Picolé de Frutas',
   'Morango, limão ou maracujá.', 6.00),

  ('Casquinha Dupla',
   '2 bolas de sorvete à escolha.', 8.00),

  ('Açaí Pequeno',
   '300 ml de açaí tradicional.', 10.00),

  ('Milk-shake Tradicional',
   '300 ml nos sabores chocolate, morango ou baunilha.', 12.00),

  ('Sundae de Chocolate',
   'Sorvete, calda e cobertura.', 13.00),

  ('Açaí Médio',
   '500 ml com até 2 acompanhamentos.', 15.00),

  ('Brownie com Sorvete',
   'Brownie de chocolate com 1 bola de sorvete.', 16.00),

  ('Waffle Gelado',
   'Waffle com sorvete e calda.', 18.00),

  ('Milk-shake Especial',
   '500 ml com chantilly e cobertura.', 20.00),

  ('Banana Split',
   '3 bolas de sorvete, banana, caldas e chantilly.', 23.00),

  ('Taça Premium',
   '3 bolas de sorvete, caldas e acompanhamentos especiais.', 27.00),

  ('Pote Família',
   '2 litros de sorvete com sabores à escolha.', 35.00),

  ('Combo Ice Te Pego',
   '1 milk-shake, 1 brownie e 2 casquinhas.', 49.90);

commit;
