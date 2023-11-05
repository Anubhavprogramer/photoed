import java.io.File;

public class manager {
    public static void main(String[] args) {
        // String directoryPath = "E:/web development bootcamp/photoed.in/content/front/";
        // String directoryPath = "E:/web development bootcamp/photoed.in/photoed.in/src/images/";
        String directoryPath = "E:/web development bootcamp/photoed.in/photoed.in/src/dextop_images/";
        String newNamePrefix = "image ";
        
        File directory = new File(directoryPath);
        File[] files = directory.listFiles();
        
        for (int i = 0; i < files.length; i++) {
            File file = files[i];
            String oldFileName = file.getName();
            String newFileName = newNamePrefix+ i+".jpg";
            File newFile = new File(directory, newFileName);
            file.renameTo(newFile);
        }
    }
}
