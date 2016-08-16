export default function() {
  this.namespace = 'api/v1';

  this.get('/developers', ({ developers }, request) => {
    return this._paginate(developers, request);
  });

  this.get('/developers/:id');
  this.post('/developers');

  this._paginate = function(model, request) {
    const page = Number(request.queryParams.page);
    const perPage = Number(request.queryParams.per_page);
    const recordsCount = model.all().models.length;
    const ids = this._paginatedIdRange(page, perPage, recordsCount);
    const totalPages = Math.ceil(recordsCount / perPage);
    request.mirageMeta = {
      'total-pages': totalPages,
      'total-count': recordsCount
    };
    return model.find(ids);
  };

  this._paginatedIdRange = function(page, perPage, recordsCount) {
    const startOfRange = (page - 1) * perPage + 1;
    let endOfRange = (page - 1) * perPage + perPage;
    if(endOfRange > (recordsCount - 1)) { endOfRange = recordsCount; }
    let ids = [];
    for(let i = startOfRange; i <= endOfRange; i++) {
      ids.push(i);
    }
    return ids;
  };
}
