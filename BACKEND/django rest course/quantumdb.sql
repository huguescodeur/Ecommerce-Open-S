-- Table Utilisateurs (Users)
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255),
    mot_de_passe VARCHAR(255),
    adresse VARCHAR(255),
    numero_telephone VARCHAR(20),
    type_utilisateur ENUM('admin', 'vendeur', 'client')
);

-- Table Vendeurs
CREATE TABLE Vendeurs (
    seller_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    nom_entreprise VARCHAR(255),
    description_entreprise TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Table Clients (Customers)
CREATE TABLE Clients (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Table Produits (Products)
CREATE TABLE Produits (
    produit_id INT AUTO_INCREMENT PRIMARY KEY,
    nom_produit VARCHAR(255),
    description TEXT,
    prix DECIMAL(10, 2),
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES Categories(categorie_id)
);

-- Table Catégories (Categories)
CREATE TABLE Categories (
    categorie_id INT AUTO_INCREMENT PRIMARY KEY,
    nom_categorie VARCHAR(255),
    description TEXT,
    
);

-- Table Commandes (Orders)
CREATE TABLE Commandes (
    Commandes_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    date_commande DATE,
    client_id VARCHAR(50),
    FOREIGN KEY (client_id) REFERENCES Clients(client_id)
);

-- Table Détails de Commande (Order_Details)
CREATE TABLE Details_Commande (
    detail_commande_id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id INT,
    produit_id INT,
    quantite INT,
    prix_unitaire DECIMAL(10, 2),
    FOREIGN KEY (commande_id) REFERENCES Orders(commande_id),
    FOREIGN KEY (produit_id) REFERENCES Products(produit_id)
);

-- Table Commentaires (Comments)
CREATE TABLE Commentaires (
    commentaire_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    produit_id INT,
    commentaire TEXT,
    note INT,
    date_commentaire DATE,
    FOREIGN KEY (client_id) REFERENCES Customers(client_id),
    FOREIGN KEY (produit_id) REFERENCES Products(produit_id)
);

-- Table Favoris (Favorites)
CREATE TABLE Favoris (
    favoris_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    produit_id INT,
    FOREIGN KEY (client_id) REFERENCES Customers(client_id),
    FOREIGN KEY (produit_id) REFERENCES Products(produit_id)
);

-- Tables de Stock (Stocks)
CREATE TABLE Stocks (
    stock_id INT AUTO_INCREMENT PRIMARY KEY,
    produit_id INT,
    vendeur_id INT,
    quantite_disponible INT,
    FOREIGN KEY (produit_id) REFERENCES Produits(produit_id),
    FOREIGN KEY (vendeur_id) REFERENCES Vendeurs(vendeur_id)
);

-- Table Paiements (Payments)
CREATE TABLE Paiements (
    paiement_id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id INT,
    montant DECIMAL(10, 2),
    methode_paiement VARCHAR(100),
    statut_paiement VARCHAR(50),
    date_paiement DATETIME,
    FOREIGN KEY (commande_id) REFERENCES Orders(commande_id)
);
