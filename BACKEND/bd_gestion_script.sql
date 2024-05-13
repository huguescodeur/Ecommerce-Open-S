CREATE TABLE Utilisateurs (
    id_utilisateur INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    niveau_acces VARCHAR(255) NOT NULL
);
CREATE TABLE Administrateurs (
    id_admin INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    genre VARCHAR(20) NOT NULL,
    id_utilisateur INT,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id_utilisateur)
);
CREATE TABLE Clients (
    id_client INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    genre VARCHAR(20) NOT NULL,
    id_utilisateur INT,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id_utilisateur)
);
CREATE TABLE Vendeurs(
    id_vendeur INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    genre VARCHAR(20) NOT NULL,
    id_utilisateur INT,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id_utilisateur)
);
CREATE TABLE Categories (
    id_categorie INT AUTO_INCREMENT PRIMARY KEY,
    nom_categorie VARCHAR(255) NOT NULL
);
CREATE TABLE Types(
    id_type INT AUTO_INCREMENT PRIMARY KEY,
    nom_type VARCHAR(255) NOT NULL
);
CREATE TABLE Produits (
    id_produit INT AUTO_INCREMENT PRIMARY KEY,
    nom_produit VARCHAR(255) NOT NULL,
    type_produit VARCHAR(255) NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    id_categorie INT,
    id_type INT,
    FOREIGN KEY (id_categorie) REFERENCES Categories(id_categorie),
    FOREIGN KEY (id_type) REFERENCES Types(id_type)
);
CREATE TABLE Stock(
    id_stock INT AUTO_INCREMENT PRIMARY KEY,
    quantite INT NOT NULL,
    id_produit INT,
    FOREIGN KEY (id_produit) REFERENCES Produits(id_produit)
);
CREATE TABLE Commandes (
    id_commande INT AUTO_INCREMENT PRIMARY KEY,
    date_heure DATETIME NOT NULL,
    statut_commande VARCHAR(255) NOT NULL,
    id_client INT,
    id_produit INT,
    FOREIGN KEY (id_client) REFERENCES Clients(id_client),
    FOREIGN KEY (id_produit) REFERENCES Produits(id_produit)