import { MatomatService } from './matomat.service';

describe('MatomatService', () => {
    let service;
    let httpClient;
    beforeEach(() => {
        httpClient = jasmine.createSpyObj('httpClient', ['cannotBeEmpty']);
        service = new MatomatService(httpClient);
    });

    it('should create the service', () => {
        expect(service).toBeTruthy();
    });
});
