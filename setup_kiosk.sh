#!/bin/bash

# Script de configuration du mode Kiosk pour Jeu Concours RG
# Compatible Raspberry Pi 5 (OS Bookworm / Wayland)

APP_DIR=$(pwd)
# Détecter le vrai utilisateur même si lancé avec sudo
USER_NAME=${SUDO_USER:-$(whoami)}
# Chemin fourni par l'utilisateur
NODE_PATH="/home/pi5/.nvm/versions/node/v24.15.0/bin/node"

# Vérifier si le chemin Node existe, sinon essayer de le trouver
if [ ! -f "$NODE_PATH" ]; then
    NODE_PATH=$(which node)
fi

echo "Utilisateur détecté : $USER_NAME"
echo "Chemin Node utilisé : $NODE_PATH"
echo "Répertoire de l'app : $APP_DIR"

echo "--- Configuration du service Node.js ---"
sudo bash -c "cat > /etc/systemd/system/loterie.service << EOF
[Unit]
Description=Serveur Node.js Loterie RG
After=network.target

[Service]
Type=simple
User=$USER_NAME
WorkingDirectory=$APP_DIR
ExecStart=$NODE_PATH server.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF"

# Activation du service
sudo systemctl daemon-reload
sudo systemctl enable loterie.service
sudo systemctl start loterie.service

echo "--- Configuration de l'autostart Chromium ---"
mkdir -p ~/.config/autostart

cat > ~/.config/autostart/kiosk.desktop << EOF
[Desktop Entry]
Type=Application
Name=Kiosk Loterie
Exec=sh -c "sleep 15 && chromium --kiosk --noerrdialogs --disable-infobars --check-for-update-interval=31536000 --password-store=basic --app=http://localhost:3000"
X-GNOME-Autostart-enabled=true
EOF

echo "--- Désactivation de la mise en veille de l'écran (Wayland) ---"
# Pour Raspberry Pi 5 / Wayland
if [ -f ~/.config/wayfire.ini ]; then
    if ! grep -q "\[idle\]" ~/.config/wayfire.ini; then
        echo -e "\n[idle]\ndpms_timeout = 0\nscreensaver_timeout = 0" >> ~/.config/wayfire.ini
    fi
fi

echo "--- Terminé ! ---"
echo "Le serveur démarrera automatiquement au boot."
echo "Chromium se lancera en plein écran après la connexion à la session graphique."
echo "Faites 'sudo reboot' pour tester."
