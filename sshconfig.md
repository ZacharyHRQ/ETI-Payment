# set up ssh tunnel

ssh -D [Port that u are assigned] -N -f testuser01@172.20.30.96 -p 8023

# ssh into server

ssh testuser01@172.20.30.96 -p 8023
