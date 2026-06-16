from fastapi.testclient import TestClient

from src.app import app


client = TestClient(app)


def test_sum_numbers_with_integers():
    response = client.get("/sum?a=2&b=3")
    assert response.status_code == 200
    assert response.json() == {"result": 5.0}


def test_sum_numbers_with_decimals():
    response = client.get("/sum?a=1.5&b=2.25")
    assert response.status_code == 200
    assert response.json() == {"result": 3.75}
