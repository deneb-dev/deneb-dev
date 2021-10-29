public class PercabanganDuaAngka {
    public static void main(String[] args) {
        int Angka1, Angka2;
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Masukkan Angka 1 : ");
        Angka1 = sc.nextInt();
        
        System.out.print("Masukkan Angka 2 : ");
        Angka2 = sc.nextInt();
        
        System.out.println("==============================");
        if (Angka1 > Angka2) {
            System.out.println(Angka1 + " Lebih besar dari " + Angka2);
        } else if (Angka1 < Angka2) {
            System.out.println(Angka1 + " Lebih kecil dari " + Angka2);
        } else {
            System.out.println(Angka1 + " dan " + Angka2 + " sama ");
        }
    }
}
