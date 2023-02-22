using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Pickle.CVlite.API.Models;
using Pickle.CVlite.API.Models.DbSettings;

namespace Pickle.CVlite.API.Services;

public class ResumeService
{
    private readonly IMongoCollection<Resume> _collection;

    public ResumeService(IOptions<ResumeStoreDatabaseSettings> resumeStoreDbSettings)
    {
        var mongoClient = new MongoClient(resumeStoreDbSettings.Value.ConnectionString);

        var mongoDataBase = mongoClient.GetDatabase(resumeStoreDbSettings.Value.DatabaseName);

        _collection = mongoDataBase.GetCollection<Resume>(resumeStoreDbSettings.Value.CollectionName);
    }

    public async Task<List<Resume>> GetAsync() =>
        await _collection.Find(_ => true).ToListAsync();

    public async Task<Resume?> GetAsync(string id) =>
        await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Resume newResume) =>
        await _collection.InsertOneAsync(newResume);

    public async Task UpdateAsync(string id, Resume updatedResume) =>
        await _collection.ReplaceOneAsync(x => x.Id == id, updatedResume);

    public async Task RemoveAsync(string id) =>
        await _collection.DeleteOneAsync(x => x.Id == id);
}