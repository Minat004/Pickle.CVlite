using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.options.createpdf;
using Adobe.PDFServicesSDK.pdfops;
using ExecutionContext = Adobe.PDFServicesSDK.ExecutionContext;
using PageLayout = Adobe.PDFServicesSDK.options.createpdf.PageLayout;

namespace Pickle.CVlite.API.Services;

public class PdfService
{
    public async Task CreatePdfFromHtml(string pathToHtml = @"/Assets/Input/input.html")
    {
        try
        {
            Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()
                .FromFile(Directory.GetCurrentDirectory() + @"/pdfservices-api-credentials.json")
                .Build();

            var executionContext = ExecutionContext.Create(credentials);
            var htmlToPdfOperation = CreatePDFOperation.CreateNew();

            var source = FileRef.CreateFromLocalFile(pathToHtml);
            htmlToPdfOperation.SetInput(source);

            SetCustomOptions(htmlToPdfOperation);

            var result = await Task.Run(() => htmlToPdfOperation.Execute(executionContext));

            await Task.Run(() => result.SaveAs(Directory.GetCurrentDirectory() + @"/output/output.pdf"));
        }
        catch (ServiceUsageException serviceUsageException)
        {
            Console.WriteLine(serviceUsageException);
            throw;
        }
    }

    private static void SetCustomOptions(CreatePDFOperation htmlToPdfOperation)
    {
        var pageLayout = new PageLayout();
        pageLayout.SetPageSize(8.27D, 11.69D);

        CreatePDFOptions htmlToPdfOptions = CreatePDFOptions.HtmlOptionsBuilder()
            .IncludeHeaderFooter(false)
            .WithPageLayout(pageLayout)
            .Build();

        htmlToPdfOperation.SetOptions(htmlToPdfOptions);
    }
}