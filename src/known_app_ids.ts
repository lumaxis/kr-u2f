export function appIdToShortName(appId: string): string | undefined {
    const mapping = {
        'github.com': 'gh',
        'https://api-9dcf9b83.duosecurity.com': 'dd',
        'https://bitbucket.org': 'b',
        'https://dashboard.stripe.com/u2f-facets': 's',
        'https://demo.yubico.com': 'yd',
        'https://gitlab.com': 'gl',
        'https://id.fedoraproject.org/u2f-origins.json': 'fd',
        'https://keepersecurity.com': 'kp',
        'https://vault.bitwarden.com/app-id.json': 'vb',
        'https://www.dropbox.com/u2f-app-id.json': 'd',
        'https://www.gstatic.com/securitykey/origins.json': 'g',
        'twitter.com': 'tw',
        'www.dropbox.com': 'd',
    };

    if (mapping[appId]) {
        return mapping[appId];
    }
    if (appId.startsWith('https://www.facebook.com/u2f/app_id/?uid=')) {
        return 'f';
    }

    return null;
}
