# EXPLANATION

    In the main page footer we see redirection links for Facebook, Instagram, Twitter

    "index.php?page=redirect&site=whatever" is used to redirect. We can inject any website we want in "site" query param.

# UTILITY

    This vulnerability can be used to redirect users to a malicious website, using the main website domain that looks legit.

# HOW TO PROTECT

    - Avoid using redirection with POST and GET input
    - Possibility to have a whitelist array of the permitted redirects