public interface Document {
    public void open();

}

public class wordDocument implements Document
{
    @Override
    public void open() {
        System.out.println("Opened the word document!!");
    }
}

public class PDFdocument implements Document{
    @Override
   public void open()
    {
        System.out.println("Opened PDF Document!!");
    }
}

public class ExcelDocument implements Document{

    @Override
    public void open() {
        System.out.println("Opened Excel Document!");
    }
}

public abstract class DocumentFactory {
    public abstract Document createDocument();

}

public class wordDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new wordDocument();
    }

}

public class PDFdocFactory extends DocumentFactory{
    @Override
    public Document createDocument() {
        return new PDFdocument();
    }
}

public class ExceldocFactory extends DocumentFactory{
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}


public class Main {
    public static void main(String[] args) {
        DocumentFactory PDFdoc = new PDFdocFactory();
        Document PDFDocument = PDFdoc.createDocument();
        PDFDocument.open();

        DocumentFactory WordDoc = new wordDocumentFactory();
        Document wordDocument = WordDoc.createDocument();
        wordDocument.open();

        DocumentFactory Exceldoc = new ExceldocFactory();
        Document ExcelDoc = Exceldoc.createDocument();
        ExcelDoc.open();

    }
}