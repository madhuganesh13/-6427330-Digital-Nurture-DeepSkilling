import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;
public class CalculatorTest2 {
    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange (Setup): runs before each test
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        // Cleanup after each test
        calculator = null;
        System.out.println("Cleanup complete");
    }

    @Test
    public void testAddition() {
        // Act
        int result = calculator.add(5, 7);

        // Assert
        assertEquals(12, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 4);
        assertEquals(6, result);
    }
}
