def test_get_token(client, user):
    response = client.post(
        'auth/token',
        data={'username': user.email, 'password': user.clean_password},
    )
    token = response.json()

    assert response.status_code == 200
    assert 'access_token' in token
    assert 'token_type' in token


def test_get_token_incorret_user(client, user):
    response = client.post(
        'auth/token',
        data={'username': 'erro@email.com', 'password': user.clean_password},
    )

    assert response.status_code == 400
    assert response.json() == {'detail': 'Incorrect email or password'}

    response = client.post(
        'auth/token',
        data={'username': user.email, 'password': 'senhaerro'},
    )

    assert response.status_code == 400
    assert response.json() == {'detail': 'Incorrect email or password'}
